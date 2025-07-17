"use client";

import { EnergyChartData } from "@/types";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

interface EnergyChartProps {
  data: EnergyChartData[];
}

const EnergyChart = ({ data }: EnergyChartProps) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      transition: 'all 0.2s ease-in-out',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
    }}
    >
      <div style={{ padding: '10px' }} className="sm:p-4">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', gap: '8px' }}>
          <div>
            <h3 style={{ 
              fontSize: '15px', 
              fontWeight: '600', 
              color: '#111827', 
              marginBottom: '2px' 
            }}
            className="sm:text-base"
            >
              Análise de Projetos
            </h3>
            <p style={{ 
              fontSize: '12px', 
              color: '#6b7280',
              display: 'none'
            }}
            className="sm:block"
            >
              Acompanhe o desempenho mensal dos seus projetos
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                width: '12px', 
                height: '12px', 
                backgroundColor: '#10b981', 
                borderRadius: '50%' 
              }}></div>
              <span style={{ fontSize: '14px', color: '#6b7280' }}>Energia Gerada</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                width: '12px', 
                height: '12px', 
                backgroundColor: '#3b82f6', 
                borderRadius: '50%' 
              }}></div>
              <span style={{ fontSize: '14px', color: '#6b7280' }}>Energia Consumida</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: '4px', paddingRight: '8px', paddingBottom: '12px' }}>
        <div style={{ height: '180px', width: '100%' }} className="sm:h-60 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={data}
              margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#64748b' }}
                className="sm:text-xs"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#64748b' }}
                className="sm:text-xs"
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  fontSize: '12px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="generated" 
                stroke="#10b981" 
                strokeWidth={2}
                name="Energia Gerada (MWh)" 
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2, fill: '#10b981' }}
              />
              <Line 
                type="monotone" 
                dataKey="consumed" 
                stroke="#3b82f6" 
                strokeWidth={2}
                name="Energia Consumida (MWh)" 
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2, fill: '#3b82f6' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EnergyChart;
