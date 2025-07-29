import { EnergyDataPoint } from "@/types";

// Dados mock baseados na estrutura especificada
export const mockEnergyData: EnergyDataPoint[] = [
  {
    referenceMonth: "2024-01",
    energy_consumed_kwh: 450,
    energy_injetada_kwh: 380,
    value: 85.50,
    dailyConsumption: 14.5,
    billableDays: 31,
    billing_amount: 387.60,
    billing_quantity: 830,
    composition: [
      { name: "Energia Elétrica", value: 125.30 },
      { name: "Distribuição", value: 98.45 },
      { name: "Transmissão", value: 45.20 },
      { name: "Encargos", value: 67.80 },
      { name: "Tributos", value: 78.90 },
      { name: "Bandeira Tarifária", value: 12.50 }
    ],
    ci_jurosMulta: 0,
    ci_iluminacao: 15.80,
    ci_icms: 45.60,
    date_coleta: "2024-01-28"
  },
  {
    referenceMonth: "2024-02",
    energy_consumed_kwh: 420,
    energy_injetada_kwh: 405,
    value: 78.20,
    dailyConsumption: 14.8,
    billableDays: 28,
    billing_amount: 403.40,
    billing_quantity: 825,
    composition: [
      { name: "Energia Elétrica", value: 118.75 },
      { name: "Distribuição", value: 95.30 },
      { name: "Transmissão", value: 42.10 },
      { name: "Encargos", value: 65.20 },
      { name: "Tributos", value: 74.15 },
      { name: "Bandeira Tarifária", value: 7.90 }
    ],
    ci_jurosMulta: 0,
    ci_iluminacao: 15.80,
    ci_icms: 42.30,
    date_coleta: "2024-02-28"
  },
  {
    referenceMonth: "2024-03",
    energy_consumed_kwh: 475,
    energy_injetada_kwh: 425,
    value: 92.30,
    dailyConsumption: 15.3,
    billableDays: 31,
    billing_amount: 417.30,
    billing_quantity: 900,
    composition: [
      { name: "Energia Elétrica", value: 132.20 },
      { name: "Distribuição", value: 102.15 },
      { name: "Transmissão", value: 48.90 },
      { name: "Encargos", value: 71.45 },
      { name: "Tributos", value: 82.60 },
      { name: "Bandeira Tarifária", value: 15.00 }
    ],
    ci_jurosMulta: 2.50,
    ci_iluminacao: 15.80,
    ci_icms: 48.90,
    date_coleta: "2024-03-28"
  },
  {
    referenceMonth: "2024-04",
    energy_consumed_kwh: 395,
    energy_injetada_kwh: 520,
    value: 65.40,
    dailyConsumption: 13.2,
    billableDays: 30,
    billing_amount: 379.80,
    billing_quantity: 915,
    composition: [
      { name: "Energia Elétrica", value: 108.95 },
      { name: "Distribuição", value: 88.60 },
      { name: "Transmissão", value: 38.75 },
      { name: "Encargos", value: 59.30 },
      { name: "Tributos", value: 68.40 },
      { name: "Bandeira Tarifária", value: 15.80 }
    ],
    ci_jurosMulta: 0,
    ci_iluminacao: 15.80,
    ci_icms: 38.70,
    date_coleta: "2024-04-28"
  },
  {
    referenceMonth: "2024-05",
    energy_consumed_kwh: 410,
    energy_injetada_kwh: 590,
    value: 58.90,
    dailyConsumption: 13.2,
    billableDays: 31,
    billing_amount: 468.90,
    billing_quantity: 1000,
    composition: [
      { name: "Energia Elétrica", value: 102.30 },
      { name: "Distribuição", value: 85.45 },
      { name: "Transmissão", value: 36.20 },
      { name: "Encargos", value: 55.80 },
      { name: "Tributos", value: 64.15 },
      { name: "Bandeira Tarifária", value: 125.00 }
    ],
    ci_jurosMulta: 0,
    ci_iluminacao: 15.80,
    ci_icms: 36.50,
    date_coleta: "2024-05-28"
  },
  {
    referenceMonth: "2024-06",
    energy_consumed_kwh: 485,
    energy_injetada_kwh: 445,
    value: 98.70,
    dailyConsumption: 16.2,
    billableDays: 30,
    billing_amount: 433.70,
    billing_quantity: 930,
    composition: [
      { name: "Energia Elétrica", value: 136.85 },
      { name: "Distribuição", value: 105.30 },
      { name: "Transmissão", value: 51.20 },
      { name: "Encargos", value: 74.90 },
      { name: "Tributos", value: 86.15 },
      { name: "Bandeira Tarifária", value: 12.30 }
    ],
    ci_jurosMulta: 0,
    ci_iluminacao: 15.80,
    ci_icms: 52.10,
    date_coleta: "2024-06-28"
  },
  {
    referenceMonth: "2024-07",
    energy_consumed_kwh: 465,
    energy_injetada_kwh: 480,
    value: 89.20,
    dailyConsumption: 15.0,
    billableDays: 31,
    billing_amount: 424.20,
    billing_quantity: 945,
    composition: [
      { name: "Energia Elétrica", value: 128.40 },
      { name: "Distribuição", value: 98.75 },
      { name: "Transmissão", value: 47.85 },
      { name: "Encargos", value: 69.60 },
      { name: "Tributos", value: 79.60 },
      { name: "Bandeira Tarifária", value: 0 }
    ],
    ci_jurosMulta: 0,
    ci_iluminacao: 15.80,
    ci_icms: 47.30,
    date_coleta: "2024-07-28"
  },
  {
    referenceMonth: "2024-08",
    energy_consumed_kwh: 445,
    energy_injetada_kwh: 355,
    value: 105.80,
    dailyConsumption: 14.4,
    billableDays: 31,
    billing_amount: 380.80,
    billing_quantity: 800,
    composition: [
      { name: "Energia Elétrica", value: 142.65 },
      { name: "Distribuição", value: 109.20 },
      { name: "Transmissão", value: 54.30 },
      { name: "Encargos", value: 78.45 },
      { name: "Tributos", value: 89.20 },
      { name: "Bandeira Tarifária", value: 6.00 }
    ],
    ci_jurosMulta: 0,
    ci_iluminacao: 15.80,
    ci_icms: 56.80,
    date_coleta: "2024-08-28"
  },
  {
    referenceMonth: "2024-09",
    energy_consumed_kwh: 425,
    energy_injetada_kwh: 385,
    value: 88.50,
    dailyConsumption: 14.2,
    billableDays: 30,
    billing_amount: 393.50,
    billing_quantity: 810,
    composition: [
      { name: "Energia Elétrica", value: 123.75 },
      { name: "Distribuição", value: 94.80 },
      { name: "Transmissão", value: 45.60 },
      { name: "Encargos", value: 66.85 },
      { name: "Tributos", value: 76.50 },
      { name: "Bandeira Tarifária", value: 0 }
    ],
    ci_jurosMulta: 0,
    ci_iluminacao: 15.80,
    ci_icms: 45.20,
    date_coleta: "2024-09-28"
  },
  {
    referenceMonth: "2024-10",
    energy_consumed_kwh: 455,
    energy_injetada_kwh: 420,
    value: 94.30,
    dailyConsumption: 14.7,
    billableDays: 31,
    billing_amount: 409.30,
    billing_quantity: 875,
    composition: [
      { name: "Energia Elétrica", value: 130.15 },
      { name: "Distribuição", value: 99.75 },
      { name: "Transmissão", value: 48.20 },
      { name: "Encargos", value: 70.40 },
      { name: "Tributos", value: 80.80 },
      { name: "Bandeira Tarifária", value: 0 }
    ],
    ci_jurosMulta: 0,
    ci_iluminacao: 15.80,
    ci_icms: 49.60,
    date_coleta: "2024-10-28"
  },
  {
    referenceMonth: "2024-11",
    energy_consumed_kwh: 480,
    energy_injetada_kwh: 395,
    value: 102.40,
    dailyConsumption: 16.0,
    billableDays: 30,
    billing_amount: 427.40,
    billing_quantity: 875,
    composition: [
      { name: "Energia Elétrica", value: 138.20 },
      { name: "Distribuição", value: 106.15 },
      { name: "Transmissão", value: 52.85 },
      { name: "Encargos", value: 76.30 },
      { name: "Tributos", value: 87.90 },
      { name: "Bandeira Tarifária", value: 12.00 }
    ],
    ci_jurosMulta: 0,
    ci_iluminacao: 15.80,
    ci_icms: 54.30,
    date_coleta: "2024-11-28"
  },
  {
    referenceMonth: "2024-12",
    energy_consumed_kwh: 495,
    energy_injetada_kwh: 375,
    value: 108.90,
    dailyConsumption: 16.0,
    billableDays: 31,
    billing_amount: 433.90,
    billing_quantity: 870,
    composition: [
      { name: "Energia Elétrica", value: 145.30 },
      { name: "Distribuição", value: 111.85 },
      { name: "Transmissão", value: 56.40 },
      { name: "Encargos", value: 81.65 },
      { name: "Tributos", value: 93.70 },
      { name: "Bandeira Tarifária", value: 45.00 }
    ],
    ci_jurosMulta: 5.80,
    ci_iluminacao: 15.80,
    ci_icms: 58.70,
    date_coleta: "2024-12-28"
  }
];
