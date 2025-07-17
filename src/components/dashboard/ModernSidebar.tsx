"use client";

import { 
  Zap, 
  Calendar, 
  BarChart3, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut,
  Grid3X3
} from "lucide-react";

export default function ModernSidebar() {
  const menuItems = [
    { icon: Grid3X3, label: "Dashboard", active: true },
    { icon: Zap, label: "Tarefas", badge: "24" },
    { icon: Calendar, label: "Calendário" },
    { icon: BarChart3, label: "Analíticas" },
    { icon: Users, label: "Equipe" },
  ];

  const generalItems = [
    { icon: Settings, label: "Configurações" },
    { icon: HelpCircle, label: "Ajuda" },
    { icon: LogOut, label: "Sair" },
  ];

  return (
    <div style={{ width: '256px', height: '100vh', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      {/* Logo */}
      <div style={{ padding: '24px', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ 
            width: '24px', 
            height: '24px', 
            backgroundColor: '#10b981', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: 'white', borderRadius: '50%' }}></div>
          </div>
          <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#111827' }}>Acresce</span>
        </div>
      </div>

      {/* Menu Items */}
      <div style={{ flex: 1, padding: '24px 16px', backgroundColor: 'white' }}>
        <div style={{ marginBottom: '24px' }}>
          <p style={{ 
            fontSize: '12px', 
            fontWeight: '600', 
            color: '#9ca3af', 
            textTransform: 'uppercase', 
            letterSpacing: '0.05em', 
            marginBottom: '12px',
            paddingLeft: '12px'
          }}>
            MENU
          </p>
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginBottom: '4px',
                  backgroundColor: item.active ? '#059669' : 'transparent',
                  color: item.active ? 'white' : '#374151',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (!item.active) {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.color = '#111827';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.active) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#374151';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <IconComponent size={20} />
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>{item.label}</span>
                </div>
                {item.badge && (
                  <span style={{
                    fontSize: '12px',
                    padding: '4px 8px',
                    borderRadius: '9999px',
                    fontWeight: '500',
                    backgroundColor: item.active ? '#047857' : '#e5e7eb',
                    color: item.active ? 'white' : '#374151'
                  }}>
                    {item.badge}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div>
          <p style={{ 
            fontSize: '12px', 
            fontWeight: '600', 
            color: '#9ca3af', 
            textTransform: 'uppercase', 
            letterSpacing: '0.05em', 
            marginBottom: '12px',
            paddingLeft: '12px'
          }}>
            GERAL
          </p>
          {generalItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginBottom: '4px',
                  color: '#374151',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.color = '#111827';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#374151';
                }}
              >
                <IconComponent size={20} />
                <span style={{ fontSize: '14px', fontWeight: '500' }}>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
