import { AiInsight } from "@/types";
import { AlertTriangle, Lightbulb, Clock } from "lucide-react";

interface AiInsightsProps {
  insights: AiInsight[];
}

const AnomalyIcon = () => <AlertTriangle size={20} />;
const SuggestionIcon = () => <Lightbulb size={20} />;

export default function AiInsights({ insights }: AiInsightsProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
         className="sm:gap-3">
      {/* Reminders Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer',
        padding: '10px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
      }}
      >
        <div style={{ padding: '0' }} className="sm:p-4">
          <h3 style={{ 
            fontSize: '14px', 
            fontWeight: '600', 
            color: '#111827', 
            marginBottom: '8px' 
          }}
          className="sm:text-base sm:mb-3"
          >
            Lembretes
          </h3>
          <div style={{ 
            background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', 
            borderRadius: '12px', 
            padding: '14px' 
          }}
          className="sm:p-4"
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
                 className="sm:gap-3">
              <div style={{ 
                backgroundColor: '#3b82f6', 
                padding: '8px', 
                borderRadius: '10px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                flexShrink: 0
              }}
              className="sm:p-3"
              >
                <Clock size={20} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ 
                  fontWeight: '600', 
                  color: '#111827', 
                  marginBottom: '4px',
                  fontSize: '16px'
                }}>
                  Reunião com Arc Company
                </h4>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#6b7280', 
                  marginBottom: '12px' 
                }}>
                  Hoje às 02:00 pm - 04:00 pm
                </p>
                <button style={{ 
                  backgroundColor: '#3b82f6', 
                  color: 'white', 
                  padding: '8px 16px', 
                  borderRadius: '8px', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2563eb';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
                }}
                >
                  Iniciar Reunião
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights Card */}
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
        <div style={{ padding: '24px 24px 16px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '600', 
            color: '#111827', 
            marginBottom: '4px' 
          }}>
            Insights da IA
          </h3>
          <p style={{ 
            fontSize: '14px', 
            color: '#6b7280' 
          }}>
            Anomalias e sugestões do sistema
          </p>
        </div>
        <div style={{ padding: '0 24px 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {insights.map((insight) => (
              <div 
                key={insight.id} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '12px', 
                  padding: '12px', 
                  borderRadius: '12px',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f9fafb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ 
                  padding: '8px', 
                  borderRadius: '8px',
                  backgroundColor: insight.type === 'anomaly' ? '#fef2f2' : '#fffbeb',
                  color: insight.type === 'anomaly' ? '#dc2626' : '#d97706'
                }}>
                  {insight.type === 'anomaly' ? <AnomalyIcon /> : <SuggestionIcon />}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ 
                    fontWeight: '600', 
                    color: '#111827', 
                    marginBottom: '4px',
                    fontSize: '14px'
                  }}>
                    {insight.title}
                  </p>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#6b7280', 
                    lineHeight: '1.5' 
                  }}>
                    {insight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
