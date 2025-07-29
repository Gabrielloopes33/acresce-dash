"use client";

import { Card } from "@/components/ui/card";
import { MonthlyTrend } from "@/types";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

interface MonthlyTrendChartProps {
  data: MonthlyTrend[];
}

export default function MonthlyTrendChart({ data }: MonthlyTrendChartProps) {
  return (
    <Card className="p-4 lg:p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Tendência Mensal</h3>
        <p className="text-sm text-gray-600">
          Consumo vs Injeção de energia e valor da fatura ao longo do tempo
        </p>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              yAxisId="energy"
              orientation="left"
              tick={{ fontSize: 12 }}
              label={{ value: 'Energia (kWh)', angle: -90, position: 'insideLeft' }}
            />
            <YAxis 
              yAxisId="value"
              orientation="right"
              tick={{ fontSize: 12 }}
              label={{ value: 'Valor (R$)', angle: 90, position: 'insideRight' }}
            />
            
            <Tooltip 
              formatter={(value, name) => {
                if (name === 'Valor da Fatura') {
                  return [
                    Number(value).toLocaleString('pt-BR', { 
                      style: 'currency', 
                      currency: 'BRL' 
                    }), 
                    name
                  ];
                }
                return [
                  `${Number(value).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} kWh`, 
                  name
                ];
              }}
              labelFormatter={(label) => `Mês: ${label}`}
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            
            <Legend />
            
            {/* Linhas para consumo e injeção */}
            <Line
              yAxisId="energy"
              type="monotone"
              dataKey="consumption"
              stroke="#ef4444"
              strokeWidth={2.5}
              dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
              name="Consumo"
            />
            <Line
              yAxisId="energy"
              type="monotone"
              dataKey="injection"
              stroke="#22c55e"
              strokeWidth={2.5}
              dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
              name="Injeção"
            />
            
            {/* Barra para valor da fatura */}
            <Bar
              yAxisId="value"
              dataKey="billValue"
              fill="#3b82f6"
              fillOpacity={0.6}
              name="Valor da Fatura"
              radius={[2, 2, 0, 0]}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
