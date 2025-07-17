"use client";

import ModernSidebar from "@/components/dashboard/ModernSidebar";
import ModernHeader from "@/components/dashboard/ModernHeader";
import ModernKpiCards from "@/components/dashboard/ModernKpiCards";
import EnergyChart from "@/components/dashboard/EnergyChart";
import AiInsights from "@/components/dashboard/AiInsights";
import ClientsTable from "@/components/dashboard/ClientsTable";
import {
  getEnergyChartData,
  getClients,
  getAiInsights,
} from "@/lib/api";

export default function Dashboard() {
  const energyChartData = getEnergyChartData();
  const clients = getClients();
  const aiInsights = getAiInsights();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <ModernSidebar />
      
      <div className="flex-1 flex flex-col">
        <ModernHeader />
        
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          <ModernKpiCards />
          
          <div className="grid gap-6 lg:grid-cols-7">
            <div className="lg:col-span-4">
              <EnergyChart data={energyChartData} />
              <EnergyChart data={energyChartData} />
            </div>
            <div className="lg:col-span-3">
              <AiInsights insights={aiInsights} />
            </div>
          </div>
          
          <ClientsTable clients={clients} />
        </main>
      </div>
    </div>
  );
}
