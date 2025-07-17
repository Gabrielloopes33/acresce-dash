import { ClientStatus } from "@/types";

interface StatusBadgeProps {
  status: ClientStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusLabels = {
    active: "Ativo",
    inactive: "Inativo", 
    pending: "Pendente"
  };

  const getStatusStyles = (status: ClientStatus) => {
    switch (status) {
      case 'active':
        return {
          backgroundColor: '#dcfce7',
          color: '#166534'
        };
      case 'inactive':
        return {
          backgroundColor: '#fef2f2',
          color: '#dc2626'
        };
      case 'pending':
        return {
          backgroundColor: '#fef3c7',
          color: '#d97706'
        };
      default:
        return {
          backgroundColor: '#f3f4f6',
          color: '#374151'
        };
    }
  };

  const styles = getStatusStyles(status);

  return (
    <span style={{
      ...styles,
      fontSize: '12px',
      fontWeight: '500',
      padding: '6px 12px',
      borderRadius: '9999px',
      display: 'inline-block'
    }}>
      {statusLabels[status]}
    </span>
  );
}
