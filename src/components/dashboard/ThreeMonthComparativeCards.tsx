"use client";

import { Card } from "@/components/ui/card";
import { ThreeMonthComparative } from "@/types";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface ThreeMonthComparativeProps {
  data: ThreeMonthComparative;
}

export default function ThreeMonthComparativeCards({ data }: ThreeMonthComparativeProps) {
  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-red-500" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-green-500" />;
      case 'stable':
        return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return 'text-red-600 bg-red-50';
      case 'down':
        return 'text-green-600 bg-green-50';
      case 'stable':
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getTrendText = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return 'Aumento';
      case 'down':
        return 'Redução';
      case 'stable':
        return 'Estável';
    }
  };

  const calculatePercentageChange = (current: number, previous: number) => {
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

  const comparativeItems = [
    {
      title: "Juros e Multa",
      current: data.jurosMulta.current,
      previous: data.jurosMulta.previous,
      trend: data.jurosMulta.trend,
      description: "Encargos por atraso no pagamento"
    },
    {
      title: "Iluminação Pública",
      current: data.iluminacao.current,
      previous: data.iluminacao.previous,
      trend: data.iluminacao.trend,
      description: "Taxa de custeio da iluminação pública"
    },
    {
      title: "ICMS",
      current: data.icms.current,
      previous: data.icms.previous,
      trend: data.icms.trend,
      description: "Imposto sobre Circulação de Mercadorias e Serviços"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Comparativo 3 Meses</h3>
        <p className="text-sm text-gray-600">
          Análise de variação dos principais componentes tarifários
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {comparativeItems.map((item, index) => {
          const percentageChange = calculatePercentageChange(item.current, item.previous);
          const absoluteChange = item.current - item.previous;
          
          return (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 mb-2">{item.description}</p>
                </div>
                <div className={`p-1 rounded-lg ${getTrendColor(item.trend)}`}>
                  {getTrendIcon(item.trend)}
                </div>
              </div>

              {/* Valor atual */}
              <div className="mb-3">
                <p className="text-sm text-gray-600">Valor atual</p>
                <p className="text-xl font-bold text-gray-900">
                  {item.current.toLocaleString('pt-BR', { 
                    style: 'currency', 
                    currency: 'BRL' 
                  })}
                </p>
              </div>

              {/* Comparativo */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <div className="text-sm">
                  <p className="text-gray-600">vs. mês anterior</p>
                  <p className="text-xs text-gray-500">
                    {item.previous.toLocaleString('pt-BR', { 
                      style: 'currency', 
                      currency: 'BRL' 
                    })}
                  </p>
                </div>
                
                <div className="text-right">
                  <div className={`text-sm font-medium ${getTrendColor(item.trend).split(' ')[0]}`}>
                    {getTrendText(item.trend)}
                  </div>
                  {item.trend !== 'stable' && (
                    <div className="text-xs">
                      <div className={getTrendColor(item.trend).split(' ')[0]}>
                        {absoluteChange > 0 ? '+' : ''}
                        {absoluteChange.toLocaleString('pt-BR', { 
                          style: 'currency', 
                          currency: 'BRL' 
                        })}
                      </div>
                      <div className="text-gray-500">
                        ({percentageChange > 0 ? '+' : ''}{percentageChange.toFixed(1)}%)
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
