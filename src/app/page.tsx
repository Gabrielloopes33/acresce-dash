"use client";

import { useState } from "react";
import ModernSidebar from "@/components/dashboard/ModernSidebar";
import ModernHeader from "@/components/dashboard/ModernHeader";
import EnergyKpiCards from "@/components/dashboard/EnergyKpiCards";
import MonthlyTrendChart from "@/components/dashboard/MonthlyTrendChart";
import TariffCompositionChart from "@/components/dashboard/TariffCompositionChart";
import ConsumptionHistory from "@/components/dashboard/ConsumptionHistory";
import ThreeMonthComparativeCards from "@/components/dashboard/ThreeMonthComparativeCards";
import EconomyProjectionCard from "@/components/dashboard/EconomyProjectionCard";
import CurrentBillDetailsCard from "@/components/dashboard/CurrentBillDetailsCard";
import AiInsights from "@/components/dashboard/AiInsights";
import { getAiInsights } from "@/lib/api";
import { mockEnergyData } from "@/lib/mock-data";
import {
  calculateDashboardKpis,
  prepareMonthlyTrendData,
  calculateThreeMonthComparative,
  calculateEconomyProjection,
  getCurrentBillDetails,
  getLatestTariffComposition
} from "@/lib/energy-calculations";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Usar dados mock até receber a planilha real
  const energyData = mockEnergyData;
  const aiInsights = getAiInsights();
  
  // Calcular todos os dados derivados
  const dashboardKpis = calculateDashboardKpis(energyData);
  const monthlyTrendData = prepareMonthlyTrendData(energyData);
  const threeMonthComparative = calculateThreeMonthComparative(energyData);
  const economyProjection = calculateEconomyProjection(energyData);
  const currentBillDetails = getCurrentBillDetails(energyData);
  const { composition: tariffComposition, month: latestMonth } = getLatestTariffComposition(energyData);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <ModernSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col lg:ml-0">
        <ModernHeader 
          onMenuClick={() => setSidebarOpen(true)}
        />
        
        <main className="flex-1 p-3 sm:p-4 lg:p-6 space-y-4 lg:space-y-6 overflow-y-auto">
          {/* Header com KPIs Summary */}
          <EnergyKpiCards kpis={dashboardKpis} />
          
          {/* Grid principal com gráficos */}
          <div className="grid gap-4 lg:gap-6 lg:grid-cols-7">
            {/* Coluna esquerda - Tendência Mensal */}
            <div className="lg:col-span-4">
              <MonthlyTrendChart data={monthlyTrendData} />
            </div>
            
            {/* Coluna direita - Composição Tarifária */}
            <div className="lg:col-span-3">
              <TariffCompositionChart 
                data={tariffComposition} 
                referenceMonth={latestMonth}
              />
            </div>
          </div>
          
          {/* Segunda linha - Histórico e Comparativos */}
          <div className="grid gap-4 lg:gap-6 lg:grid-cols-7">
            {/* Histórico Detalhado */}
            <div className="lg:col-span-4">
              <ConsumptionHistory data={energyData} />
            </div>
            
            {/* AI Insights */}
            <div className="lg:col-span-3">
              <AiInsights insights={aiInsights} />
            </div>
          </div>
          
          {/* Terceira linha - Comparativo 3 Meses */}
          <ThreeMonthComparativeCards data={threeMonthComparative} />
          
          {/* Quarta linha - Projeção e Detalhes da Fatura */}
          <div className="grid gap-4 lg:gap-6 lg:grid-cols-2">
            <EconomyProjectionCard projection={economyProjection} />
            {currentBillDetails && (
              <CurrentBillDetailsCard billDetails={currentBillDetails} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
