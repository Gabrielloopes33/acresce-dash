import { 
  EnergyDataPoint, 
  DashboardKpis, 
  MonthlyTrend, 
  ThreeMonthComparative, 
  EconomyProjection,
  CurrentBillDetails,
  TariffComposition
} from "@/types";

// Constantes para cálculos
const CO2_EMISSION_FACTOR = 0.084; // kg CO₂ por kWh
const INSTALLATION_COST = 50000; // Valor padrão para payback (R$)

/**
 * Calcula os KPIs principais do dashboard
 */
export function calculateDashboardKpis(data: EnergyDataPoint[]): DashboardKpis {
  if (!data || data.length === 0) {
    return {
      totalGeneratedEnergy: 0,
      selfConsumptionPercentage: 0,
      averageBillReduction: 0,
      accumulatedPayback: 0,
      avoidedEmissions: 0
    };
  }

  // Energia Gerada Total (soma de toda energia injetada)
  const totalGeneratedEnergy = data.reduce((sum, month) => sum + month.energy_injetada_kwh, 0);

  // Energia Autoconsumida (%) - média dos últimos 12 meses
  const last12Months = data.slice(-12);
  const avgSelfConsumption = last12Months.reduce((sum, month) => {
    const totalEnergy = month.energy_consumed_kwh + month.energy_injetada_kwh;
    return totalEnergy > 0 ? sum + (month.energy_consumed_kwh / totalEnergy) * 100 : sum;
  }, 0) / Math.max(last12Months.length, 1);

  // Redução Média de Conta - comparar com baseline histórico
  const currentAvgBill = last12Months.reduce((sum, month) => sum + month.value, 0) / Math.max(last12Months.length, 1);
  const estimatedBillWithoutSolar = currentAvgBill * 1.6; // Estimar que seria 60% maior sem solar
  const averageBillReduction = estimatedBillWithoutSolar - currentAvgBill;

  // Payback Acumulado (meses)
  const monthlyReduction = averageBillReduction;
  const accumulatedPayback = monthlyReduction > 0 ? INSTALLATION_COST / monthlyReduction : 0;

  // Emissões Evitadas (kg CO₂)
  const avoidedEmissions = totalGeneratedEnergy * CO2_EMISSION_FACTOR;

  return {
    totalGeneratedEnergy,
    selfConsumptionPercentage: avgSelfConsumption,
    averageBillReduction,
    accumulatedPayback,
    avoidedEmissions
  };
}

/**
 * Prepara dados para o gráfico de tendência mensal
 */
export function prepareMonthlyTrendData(data: EnergyDataPoint[]): MonthlyTrend[] {
  return data.map(month => ({
    month: month.referenceMonth,
    consumption: month.energy_consumed_kwh,
    injection: month.energy_injetada_kwh,
    billValue: month.value
  }));
}

/**
 * Calcula o comparativo de 3 meses
 */
export function calculateThreeMonthComparative(data: EnergyDataPoint[]): ThreeMonthComparative {
  const last3Months = data.slice(-3);
  
  if (last3Months.length < 2) {
    return {
      jurosMulta: { current: 0, previous: 0, trend: 'stable' },
      iluminacao: { current: 0, previous: 0, trend: 'stable' },
      icms: { current: 0, previous: 0, trend: 'stable' }
    };
  }

  const current = last3Months[last3Months.length - 1];
  const previous = last3Months[last3Months.length - 2];

  const getTrend = (currentVal: number, previousVal: number): 'up' | 'down' | 'stable' => {
    const diff = currentVal - previousVal;
    const threshold = Math.abs(previousVal) * 0.05; // 5% de threshold para considerar estável
    
    if (Math.abs(diff) <= threshold) return 'stable';
    return diff > 0 ? 'up' : 'down';
  };

  return {
    jurosMulta: {
      current: current.ci_jurosMulta,
      previous: previous.ci_jurosMulta,
      trend: getTrend(current.ci_jurosMulta, previous.ci_jurosMulta)
    },
    iluminacao: {
      current: current.ci_iluminacao,
      previous: previous.ci_iluminacao,
      trend: getTrend(current.ci_iluminacao, previous.ci_iluminacao)
    },
    icms: {
      current: current.ci_icms,
      previous: previous.ci_icms,
      trend: getTrend(current.ci_icms, previous.ci_icms)
    }
  };
}

/**
 * Calcula a projeção de economia
 */
export function calculateEconomyProjection(data: EnergyDataPoint[]): EconomyProjection {
  if (!data || data.length === 0) {
    return {
      estimatedSavings: 0,
      baselineKwh: 0,
      averageTariff: 0
    };
  }

  const last12Months = data.slice(-12);
  
  // Calcular tarifa média
  const totalBillingAmount = last12Months.reduce((sum, month) => sum + month.billing_amount, 0);
  const totalBillingQuantity = last12Months.reduce((sum, month) => sum + month.billing_quantity, 0);
  const averageTariff = totalBillingQuantity > 0 ? totalBillingAmount / totalBillingQuantity : 0;

  // Baseline de consumo (média dos últimos 12 meses)
  const baselineKwh = last12Months.reduce((sum, month) => sum + month.energy_consumed_kwh, 0) / Math.max(last12Months.length, 1);
  
  // Energia autoconsumida média
  const avgAutoconsumed = last12Months.reduce((sum, month) => sum + month.energy_consumed_kwh, 0) / Math.max(last12Months.length, 1);
  
  // Economia estimada = (baseline - energia autoconsumida) × tarifa média
  // Como já temos a energia sendo autoconsumida, a economia é baseada na diferença do que seria pago sem solar
  const estimatedSavings = (baselineKwh * 1.6 - avgAutoconsumed) * averageTariff;

  return {
    estimatedSavings: Math.max(0, estimatedSavings),
    baselineKwh,
    averageTariff
  };
}

/**
 * Pega os detalhes da fatura mais recente
 */
export function getCurrentBillDetails(data: EnergyDataPoint[]): CurrentBillDetails | null {
  if (!data || data.length === 0) return null;

  const latestMonth = data[data.length - 1];
  
  // Como os dados reais virão da planilha, por enquanto retornamos dados mock baseados no último mês
  return {
    barCode: `23790000000${Math.floor(latestMonth.value * 100).toString().padStart(8, '0')}${Math.floor(Math.random() * 1000000)}`,
    pix: `00020126430014br.gov.bcb.pix0121${Math.random().toString(36).substring(2)}520400005303986540${latestMonth.value.toFixed(2)}5802BR5925CEMIG DISTRIBUICAO S.A.6009Belo Horizonte62070503***6304`,
    dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 10 dias a partir de hoje
    secondCopyLink: "https://atendimento.cemig.com.br/segunda-via",
    amount: latestMonth.value
  };
}

/**
 * Pega a composição tarifária mais recente
 */
export function getLatestTariffComposition(data: EnergyDataPoint[]): { composition: TariffComposition[], month: string } {
  if (!data || data.length === 0) {
    return {
      composition: [],
      month: ''
    };
  }

  const latestMonth = data[data.length - 1];
  
  return {
    composition: latestMonth.composition || [],
    month: latestMonth.referenceMonth
  };
}

/**
 * Formata número para exibição brasileira
 */
export function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  });
}

/**
 * Formata kWh para exibição
 */
export function formatKwh(value: number): string {
  return `${value.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} kWh`;
}

/**
 * Formata percentual
 */
export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}
