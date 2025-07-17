import { Client } from "@/types";
import StatusBadge from "./StatusBadge";
import { MoreHorizontal } from "lucide-react";

interface ClientsTableProps {
  clients: Client[];
}

export default function ClientsTable({ clients }: ClientsTableProps) {
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
      <div style={{ padding: '24px 24px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              color: '#111827', 
              marginBottom: '4px' 
            }}>
              Colaboração da Equipe
            </h3>
            <p style={{ 
              fontSize: '14px', 
              color: '#6b7280' 
            }}>
              Progresso dos projetos e membros da equipe
            </p>
          </div>
          <button style={{ 
            color: '#9ca3af', 
            padding: '8px', 
            borderRadius: '8px', 
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#6b7280';
            e.currentTarget.style.backgroundColor = '#f3f4f6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#9ca3af';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          >
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>
      <div style={{ padding: '0 24px 24px' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '12px 0', 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  color: '#6b7280' 
                }}>
                  Membro
                </th>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '12px 0', 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  color: '#6b7280' 
                }}>
                  Projeto
                </th>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '12px 0', 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  color: '#6b7280' 
                }}>
                  Consumo (kWh)
                </th>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '12px 0', 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  color: '#6b7280' 
                }}>
                  Progresso
                </th>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '12px 0', 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  color: '#6b7280' 
                }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr 
                  key={client.id} 
                  style={{ 
                    borderBottom: '1px solid #f3f4f6',
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
                  <td style={{ padding: '16px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: 'white', 
                        fontWeight: '600', 
                        fontSize: '14px',
                        backgroundColor: index % 4 === 0 ? '#10b981' :
                                       index % 4 === 1 ? '#3b82f6' :
                                       index % 4 === 2 ? '#8b5cf6' : '#f59e0b',
                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                      }}>
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <p style={{ 
                          fontWeight: '500', 
                          color: '#111827', 
                          fontSize: '14px',
                          marginBottom: '2px'
                        }}>
                          {client.name}
                        </p>
                        <p style={{ 
                          fontSize: '14px', 
                          color: '#6b7280' 
                        }}>
                          {client.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 0' }}>
                    <div>
                      <p style={{ 
                        fontWeight: '500', 
                        color: '#111827', 
                        fontSize: '14px',
                        marginBottom: '2px'
                      }}>
                        {index === 0 ? 'Sistema de Autenticação' :
                         index === 1 ? 'Layout Responsivo' :
                         index === 2 ? 'Busca e Filtros' : 'Página Inicial'}
                      </p>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#6b7280' 
                      }}>
                        {index === 0 ? 'Concluído' :
                         index === 1 ? 'Em progresso' :
                         index === 2 ? 'Pendente' : 'Em progresso'}
                      </p>
                    </div>
                  </td>
                  <td style={{ 
                    padding: '16px 0', 
                    color: '#111827', 
                    fontWeight: '500',
                    fontSize: '14px'
                  }}>
                    {client.consumption.toLocaleString()}
                  </td>
                  <td style={{ padding: '16px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ 
                        flex: 1, 
                        backgroundColor: '#e5e7eb', 
                        borderRadius: '9999px', 
                        height: '8px',
                        minWidth: '80px'
                      }}>
                        <div style={{ 
                          height: '8px', 
                          borderRadius: '9999px',
                          backgroundColor: index === 0 ? '#10b981' :
                                          index === 1 ? '#3b82f6' :
                                          index === 2 ? '#eab308' : '#8b5cf6',
                          width: index === 0 ? '100%' :
                                 index === 1 ? '75%' :
                                 index === 2 ? '25%' : '50%',
                          transition: 'all 0.3s'
                        }}></div>
                      </div>
                      <span style={{ 
                        fontSize: '14px', 
                        color: '#6b7280', 
                        fontWeight: '500',
                        minWidth: '40px'
                      }}>
                        {index === 0 ? '100%' :
                         index === 1 ? '75%' :
                         index === 2 ? '25%' : '50%'}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: '16px 0' }}>
                    <StatusBadge status={client.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
