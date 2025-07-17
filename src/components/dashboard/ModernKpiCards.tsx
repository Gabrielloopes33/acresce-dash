import { TrendingUp, Zap, Users, Activity, TrendingDown } from "lucide-react";

export default function ModernKpiCards() {
  const kpiItems = [
    {
      title: "Total Projetos",
      value: "24",
      subtitle: "Aumentou do mês passado",
      icon: Activity,
      color: "#10b981",
      textColor: "#059669",
      bgColor: "#f0fdf4",
      trend: "up",
      change: "+12%"
    },
    {
      title: "Projetos Finalizados", 
      value: "10",
      subtitle: "Aumentou do mês passado",
      icon: TrendingUp,
      color: "#3b82f6",
      textColor: "#2563eb",
      bgColor: "#eff6ff",
      trend: "up",
      change: "+8%"
    },
    {
      title: "Projetos Ativos",
      value: "12", 
      subtitle: "Aumentou do mês passado",
      icon: Zap,
      color: "#f59e0b",
      textColor: "#d97706",
      bgColor: "#fffbeb",
      trend: "up",
      change: "+15%"
    },
    {
      title: "Projetos Pendentes",
      value: "2",
      subtitle: "Em discussão",
      icon: Users,
      color: "#8b5cf6", 
      textColor: "#7c3aed",
      bgColor: "#faf5ff",
      trend: "down",
      change: "-5%"
    }
  ];

  return (
    <div style={{ 
      display: 'grid', 
      gap: '16px', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
    }}>
      {kpiItems.map((item, index) => {
        const IconComponent = item.icon;
        const TrendIcon = item.trend === "up" ? TrendingUp : TrendingDown;
        return (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              transition: 'all 0.2s ease-in-out',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{ flex: 1 }}>
                <p style={{ 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  color: '#6b7280', 
                  marginBottom: '8px' 
                }}>
                  {item.title}
                </p>
                <p style={{ 
                  fontSize: '32px', 
                  fontWeight: 'bold', 
                  color: '#111827', 
                  marginBottom: '8px',
                  lineHeight: '1'
                }}>
                  {item.value}
                </p>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '4px', 
                  fontSize: '14px',
                  color: item.textColor
                }}>
                  <TrendIcon size={16} />
                  <span style={{ fontWeight: '500' }}>{item.change}</span>
                  <span style={{ color: '#6b7280' }}>{item.subtitle}</span>
                </div>
              </div>
              <div style={{ 
                backgroundColor: item.color, 
                padding: '12px', 
                borderRadius: '12px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}>
                <IconComponent size={20} color="white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
