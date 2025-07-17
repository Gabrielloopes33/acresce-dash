import { KpiData, EnergyChartData, Client, AiInsight } from "@/types";

export const getKpiData = (): KpiData => ({
  revenue: 125000,
  generatedEnergy: 500,
  accumulatedEnergy: 120,
  activeClients: 250,
  pr: 0.85,
  availability: 0.98,
});

export const getEnergyChartData = (): EnergyChartData[] => [
  { month: "Jan", generated: 450, consumed: 400 },
  { month: "Feb", generated: 480, consumed: 420 },
  { month: "Mar", generated: 520, consumed: 450 },
  { month: "Apr", generated: 550, consumed: 480 },
  { month: "May", generated: 580, consumed: 500 },
  { month: "Jun", generated: 600, consumed: 520 },
];

export const getClients = (): Client[] => [
  {
    id: "1",
    name: "Empresa A",
    email: "contato@empresa-a.com",
    consumption: 1200,
    discount: 0.15,
    status: "active",
  },
  {
    id: "2",
    name: "Empresa B",
    email: "contato@empresa-b.com",
    consumption: 800,
    discount: 0.12,
    status: "active",
  },
  {
    id: "3",
    name: "Empresa C",
    email: "contato@empresa-c.com",
    consumption: 2500,
    discount: 0.18,
    status: "inactive",
  },
  {
    id: "4",
    name: "Empresa D",
    email: "contato@empresa-d.com",
    consumption: 500,
    discount: 0.1,
    status: "pending",
  },
];

export const getAiInsights = (): AiInsight[] => [
  {
    id: "1",
    type: "anomaly",
    title: "Anomalia Detectada",
    description: "Queda de 15% na performance do Bloco de Inversores 3.",
  },
  {
    id: "2",
    type: "suggestion",
    title: "Sugestão de Operação",
    description: "Previsão de chuva. Adiar limpeza dos painéis.",
  },
];
