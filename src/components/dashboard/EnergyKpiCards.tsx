"use client";

import { Card } from "@/components/ui/card";
import { DashboardKpis } from "@/types";
import { Zap, Recycle, DollarSign, Clock, Leaf } from "lucide-react";

interface EnergyKpiCardsProps {
  kpis: DashboardKpis;
}

export default function EnergyKpiCards({ kpis }: EnergyKpiCardsProps) {
  const kpiCards = [
    {
      title: "Energia Gerada Total",
      value: `${kpis.totalGeneratedEnergy.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} kWh`,
      icon: Zap,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      description: "Volume total produzido pelo sistema fotovoltaico"
    },
    {
      title: "Energia Autoconsumida",
      value: `${kpis.selfConsumptionPercentage.toFixed(1)}%`,
      icon: Recycle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      description: "Percentual de energia solar utilizada diretamente"
    },
    {
      title: "Redução Média de Conta",
      value: kpis.averageBillReduction.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
      }),
      icon: DollarSign,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Economia financeira média mensal"
    },
    {
      title: "Payback Acumulado",
      value: `${kpis.accumulatedPayback.toFixed(1)} meses`,
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Tempo para retorno do investimento"
    },
    {
      title: "Emissões Evitadas",
      value: `${kpis.avoidedEmissions.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} kg CO₂`,
      icon: Leaf,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      description: "Impacto ambiental positivo"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
      {kpiCards.map((kpi, index) => {
        const Icon = kpi.icon;
        return (
          <Card key={index} className="p-4 lg:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
                    <Icon className={`h-4 w-4 ${kpi.color}`} />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">{kpi.title}</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                  {kpi.value}
                </p>
                <p className="text-xs text-gray-500">{kpi.description}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
