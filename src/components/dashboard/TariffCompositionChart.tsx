"use client";

import { Card } from "@/components/ui/card";
import { TariffComposition } from "@/types";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";

interface TariffCompositionChartProps {
  data: TariffComposition[];
  referenceMonth: string;
}

const COLORS = [
  '#3b82f6', // blue
  '#ef4444', // red
  '#22c55e', // green
  '#f59e0b', // amber
  '#8b5cf6', // violet
  '#06b6d4', // cyan
];

export default function TariffCompositionChart({ data, referenceMonth }: TariffCompositionChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const percentage = ((data.value / total) * 100).toFixed(1);
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium">{data.name}</p>
          <p className="text-blue-600">
            {data.value.toLocaleString('pt-BR', { 
              style: 'currency', 
              currency: 'BRL' 
            })}
          </p>
          <p className="text-gray-600 text-sm">{percentage}% do total</p>
        </div>
      );
    }
    return null;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCustomLabel = ({ percent }: any) => {
    const percentage = percent * 100;
    return percentage > 5 ? `${percentage.toFixed(1)}%` : '';
  };

  return (
    <Card className="p-4 lg:p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Composição Tarifária</h3>
        <p className="text-sm text-gray-600">
          Distribuição dos componentes da tarifa em {referenceMonth}
        </p>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                />
              ))}
            </Pie>
            <Tooltip content={renderCustomTooltip} />
            <Legend 
              verticalAlign="bottom"
              height={36}
              formatter={(value, entry) => (
                <span style={{ color: entry.color }} className="text-sm">
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Tabela resumo */}
      <div className="mt-4 border-t pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {data.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-gray-700">{item.name}</span>
              </div>
              <span className="font-medium">
                {item.value.toLocaleString('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL' 
                })}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-3 pt-3 border-t font-semibold">
          <span>Total</span>
          <span>
            {total.toLocaleString('pt-BR', { 
              style: 'currency', 
              currency: 'BRL' 
            })}
          </span>
        </div>
      </div>
    </Card>
  );
}
