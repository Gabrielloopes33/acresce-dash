"use client";

import { Bell, Plus, Menu } from "lucide-react";

interface ModernHeaderProps {
  onMenuClick: () => void;
}

export default function ModernHeader({ onMenuClick }: ModernHeaderProps) {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      borderBottom: '1px solid #f3f4f6', 
      padding: '16px 20px' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
          {/* Mobile Menu Button */}
          <button 
            onClick={onMenuClick}
            style={{ 
              padding: '8px', 
              borderRadius: '6px', 
              backgroundColor: '#f3f4f6',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="lg:hidden"
          >
            <Menu size={20} color="#6b7280" />
          </button>
          
          <div style={{ flex: 1 }}>
            <h1 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '4px' 
            }}
            className="sm:text-3xl"
            >
              Dashboard
            </h1>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '14px',
              display: 'none'
            }}
            className="sm:block"
            >
              Planeje, priorize e acompanhe suas tarefas com facilidade.
            </p>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
             className="sm:gap-3">
          <button 
            style={{ 
              backgroundColor: '#10b981', 
              color: 'white', 
              padding: '8px 12px', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s'
            }}
            className="sm:px-4 sm:py-2 sm:text-sm"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#059669';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#10b981';
              e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
            }}
          >
            <Plus size={16} />
            Adicionar Projeto
          </button>
          
          <button 
            style={{ 
              border: '1px solid #e5e7eb', 
              backgroundColor: 'white',
              color: '#374151', 
              padding: '10px 16px', 
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
              e.currentTarget.style.borderColor = '#d1d5db';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
          >
            Importar Dados
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '12px' }}>
            <button 
              style={{ 
                padding: '10px', 
                borderRadius: '8px', 
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Bell size={20} color="#6b7280" />
              <span style={{ 
                position: 'absolute', 
                top: '-4px', 
                right: '-4px', 
                width: '12px', 
                height: '12px', 
                backgroundColor: '#ef4444', 
                borderRadius: '50%', 
                border: '2px solid white' 
              }}></span>
            </button>
            
            <div style={{ 
              width: '36px', 
              height: '36px', 
              background: 'linear-gradient(135deg, #10b981, #3b82f6)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }}>
              <span style={{ 
                color: 'white', 
                fontWeight: '600', 
                fontSize: '14px' 
              }}>
                GM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
