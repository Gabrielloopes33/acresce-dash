// Interfaces para dados da planilha/API
export interface EnergyDataPoint {
  referenceMonth: string;
  energy_consumed_kwh: number;
  energy_injetada_kwh: number;
  value: number; // valor_fatura
  dailyConsumption: number;
  billableDays: number;
  billing_amount: number;
  billing_quantity: number;
  composition: TariffComposition[];
  ci_jurosMulta: number;
  ci_iluminacao: number;
  ci_icms: number;
  date_coleta: string;
}

export interface TariffComposition {
  name: string;
  value: number;
}

// KPIs consolidados para o header
export interface DashboardKpis {
  totalGeneratedEnergy: number; // kWh
  selfConsumptionPercentage: number; // %
  averageBillReduction: number; // R$
  accumulatedPayback: number; // meses
  avoidedEmissions: number; // kg CO₂
}

// Dados para tendência mensal
export interface MonthlyTrend {
  month: string;
  consumption: number;
  injection: number;
  billValue: number;
}

// Comparativo de 3 meses
export interface ThreeMonthComparative {
  jurosMulta: {
    current: number;
    previous: number;
    trend: 'up' | 'down' | 'stable';
  };
  iluminacao: {
    current: number;
    previous: number;
    trend: 'up' | 'down' | 'stable';
  };
  icms: {
    current: number;
    previous: number;
    trend: 'up' | 'down' | 'stable';
  };
}

// Projeção de economia
export interface EconomyProjection {
  estimatedSavings: number;
  baselineKwh: number;
  averageTariff: number;
}

// Detalhes da fatura atual
export interface CurrentBillDetails {
  barCode: string;
  pix: string;
  dueDate: string;
  secondCopyLink: string;
  amount: number;
}

// Legacy types (manter compatibilidade)
export interface KpiData {
  revenue: number;
  generatedEnergy: number;
  accumulatedEnergy: number;
  activeClients: number;
  pr: number;
  availability: number;
}

export interface EnergyChartData {
  month: string;
  generated: number;
  consumed: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  consumption: number;
  discount: number;
  status: "active" | "inactive" | "pending";
}

export interface AiInsight {
  id: string;
  type: "anomaly" | "suggestion";
  title: string;
  description: string;
}

export type ClientStatus = "active" | "inactive" | "pending";
