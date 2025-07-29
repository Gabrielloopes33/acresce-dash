"use client";

import { Card } from "@/components/ui/card";
import { EnergyDataPoint } from "@/types";

interface ConsumptionHistoryProps {
  data: EnergyDataPoint[];
}

export default function ConsumptionHistory({ data }: ConsumptionHistoryProps) {
  // Pegar últimos 12 meses
  const last12Months = data.slice(-12);

  const getConsumptionTrend = (current: number, previous?: number) => {
    if (!previous) return null;
    const difference = current - previous;
    const percentage = ((difference / previous) * 100);
    
    if (Math.abs(percentage) < 1) return { trend: 'stable', percentage: 0 };
    if (percentage > 0) return { trend: 'up', percentage: percentage.toFixed(1) };
    return { trend: 'down', percentage: Math.abs(percentage).toFixed(1) };
  };

  const getTrendIcon = (trend: string | null) => {
    if (!trend) return null;
    switch (trend) {
      case 'up': return <span className="text-red-500">↗</span>;
      case 'down': return <span className="text-green-500">↘</span>;
      case 'stable': return <span className="text-gray-500">→</span>;
      default: return null;
    }
  };

  const getTrendColor = (trend: string | null) => {
    switch (trend) {
      case 'up': return 'text-red-600';
      case 'down': return 'text-green-600';
      case 'stable': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card className="p-4 lg:p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Histórico Detalhado de Consumo</h3>
        <p className="text-sm text-gray-600">
          Últimos 12 meses com detalhamento do consumo e tendências
        </p>
      </div>

      {/* Versão Desktop - Tabela */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 font-medium text-gray-700">Mês</th>
              <th className="text-right py-3 px-2 font-medium text-gray-700">Dias Faturados</th>
              <th className="text-right py-3 px-2 font-medium text-gray-700">Consumo Diário (kWh)</th>
              <th className="text-right py-3 px-2 font-medium text-gray-700">Consumo Mensal (kWh)</th>
              <th className="text-right py-3 px-2 font-medium text-gray-700">Tendência</th>
              <th className="text-right py-3 px-2 font-medium text-gray-700">Valor (R$)</th>
            </tr>
          </thead>
          <tbody>
            {last12Months.map((month, index) => {
              const previousMonth = index > 0 ? last12Months[index - 1] : null;
              const consumptionTrend = getConsumptionTrend(
                month.energy_consumed_kwh, 
                previousMonth?.energy_consumed_kwh
              );
              
              return (
                <tr key={month.referenceMonth} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-3 px-2 font-medium">{month.referenceMonth}</td>
                  <td className="py-3 px-2 text-right">{month.billableDays}</td>
                  <td className="py-3 px-2 text-right">
                    {month.dailyConsumption.toFixed(1)}
                  </td>
                  <td className="py-3 px-2 text-right font-medium">
                    {month.energy_consumed_kwh.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}
                  </td>
                  <td className="py-3 px-2 text-right">
                    {consumptionTrend && (
                      <div className={`flex items-center justify-end gap-1 ${getTrendColor(consumptionTrend.trend)}`}>
                        {getTrendIcon(consumptionTrend.trend)}
                        <span className="text-xs">
                          {consumptionTrend.percentage}%
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-2 text-right font-medium">
                    {month.value.toLocaleString('pt-BR', { 
                      style: 'currency', 
                      currency: 'BRL' 
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Versão Mobile - Cards */}
      <div className="md:hidden space-y-3">
        {last12Months.map((month, index) => {
          const previousMonth = index > 0 ? last12Months[index - 1] : null;
          const consumptionTrend = getConsumptionTrend(
            month.energy_consumed_kwh, 
            previousMonth?.energy_consumed_kwh
          );

          return (
            <div key={month.referenceMonth} className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-gray-900">{month.referenceMonth}</h4>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">
                    {month.value.toLocaleString('pt-BR', { 
                      style: 'currency', 
                      currency: 'BRL' 
                    })}
                  </div>
                  {consumptionTrend && (
                    <div className={`flex items-center justify-end gap-1 ${getTrendColor(consumptionTrend.trend)}`}>
                      {getTrendIcon(consumptionTrend.trend)}
                      <span className="text-xs">
                        {consumptionTrend.percentage}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Dias Faturados:</span>
                  <div className="font-medium">{month.billableDays}</div>
                </div>
                <div>
                  <span className="text-gray-600">Consumo Diário:</span>
                  <div className="font-medium">{month.dailyConsumption.toFixed(1)} kWh</div>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-600">Consumo Mensal:</span>
                  <div className="font-medium">
                    {month.energy_consumed_kwh.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} kWh
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
