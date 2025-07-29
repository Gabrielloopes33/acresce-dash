"use client";

import { Card } from "@/components/ui/card";
import { EconomyProjection } from "@/types";
import { Calculator, TrendingUp, Zap } from "lucide-react";

interface EconomyProjectionProps {
  projection: EconomyProjection;
}

export default function EconomyProjectionCard({ projection }: EconomyProjectionProps) {
  const monthlyProjection = projection.estimatedSavings;
  const annualProjection = monthlyProjection * 12;
  
  return (
    <Card className="p-4 lg:p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-600" />
            Projeção de Economia
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Estimativa baseada no consumo histórico e tarifa média
          </p>
        </div>
      </div>

      {/* Economia Mensal */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-green-50 rounded-lg">
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Economia Estimada Mensal</p>
            <p className="text-2xl font-bold text-green-600">
              {monthlyProjection.toLocaleString('pt-BR', { 
                style: 'currency', 
                currency: 'BRL' 
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Detalhes do Cálculo */}
      <div className="space-y-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Breakdown do Cálculo</h4>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Baseline de Consumo:</span>
              <span className="font-medium">
                {projection.baselineKwh.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} kWh
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Tarifa Média:</span>
              <span className="font-medium">
                {projection.averageTariff.toLocaleString('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL' 
                })}/kWh
              </span>
            </div>
            
            <div className="border-t pt-2 flex justify-between font-medium">
              <span>Economia Calculada:</span>
              <span className="text-green-600">
                {monthlyProjection.toLocaleString('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL' 
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Projeções */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Projeção Anual</span>
          </div>
          <p className="text-xl font-bold text-blue-600">
            {annualProjection.toLocaleString('pt-BR', { 
              style: 'currency', 
              currency: 'BRL' 
            })}
          </p>
          <p className="text-xs text-blue-700 mt-1">
            Em economia de energia elétrica
          </p>
        </div>

        <div className="bg-emerald-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-900">Benefício 10 Anos</span>
          </div>
          <p className="text-xl font-bold text-emerald-600">
            {(annualProjection * 10).toLocaleString('pt-BR', { 
              style: 'currency', 
              currency: 'BRL' 
            })}
          </p>
          <p className="text-xs text-emerald-700 mt-1">
            Projeção de longo prazo
          </p>
        </div>
      </div>

      {/* Nota explicativa */}
      <div className="mt-4 p-3 bg-amber-50 rounded-lg">
        <p className="text-xs text-amber-800">
          <strong>Nota:</strong> Cálculo baseado na fórmula: (Baseline kWh - Energia Autoconsumida) × Tarifa Média. 
          Valores são estimativas e podem variar conforme mudanças tarifárias e perfil de consumo.
        </p>
      </div>
    </Card>
  );
}
