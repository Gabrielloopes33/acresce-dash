"use client";

import { useState } from "react";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const energyChartData = getEnergyChartData();
  const clients = getClients();
  const aiInsights = getAiInsights();

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
          <ModernKpiCards />
          
          <div className="grid gap-4 lg:gap-6 lg:grid-cols-7">
            <div className="lg:col-span-4 space-y-4 lg:space-y-6">
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
