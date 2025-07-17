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
