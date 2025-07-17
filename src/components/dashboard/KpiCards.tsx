import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { KpiData } from "@/types";
import { formatCurrency, formatPercentage } from "@/lib/formatters";

interface KpiCardsProps {
  data: KpiData;
}

export default function KpiCards({ data }: KpiCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Receita Estimada</CardTitle>
          <CardDescription>Receita mensal estimada</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{formatCurrency(data.revenue)}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Energia Gerada</CardTitle>
          <CardDescription>Total de energia gerada este mês</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{data.generatedEnergy} MWh</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Performance Ratio (PR)</CardTitle>
          <CardDescription>Eficiência da usina</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{formatPercentage(data.pr)}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Clientes Ativos</CardTitle>
          <CardDescription>Total de clientes na base</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{data.activeClients}</p>
        </CardContent>
      </Card>
    </div>
  );
}
