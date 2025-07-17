import { ClientStatus } from "@/types";

export const getStatusStyles = (status: ClientStatus): string => {
  const statusStyles = {
    active: "bg-green-500/20 text-green-700",
    inactive: "bg-red-500/20 text-red-700",
    pending: "bg-yellow-500/20 text-yellow-700",
  };
  
  return statusStyles[status];
};

export const formatCurrency = (value: number): string => {
  return `R$ ${value.toLocaleString()}`;
};

export const formatPercentage = (value: number): string => {
  return `${(value * 100).toFixed(0)}%`;
};
