"use client";

import { Card } from "@/components/ui/card";
import { CurrentBillDetails } from "@/types";
import { Receipt, Calendar, CreditCard, ExternalLink, Copy } from "lucide-react";
import { useState } from "react";

interface CurrentBillDetailsProps {
  billDetails: CurrentBillDetails;
}

export default function CurrentBillDetailsCard({ billDetails }: CurrentBillDetailsProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const formatBarCode = (barCode: string) => {
    // Formatar código de barras em grupos para melhor legibilidade
    if (barCode.length >= 44) {
      return `${barCode.slice(0, 11)} ${barCode.slice(11, 22)} ${barCode.slice(22, 33)} ${barCode.slice(33)}`;
    }
    return barCode;
  };

  const formatDueDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const isOverdue = () => {
    try {
      const dueDate = new Date(billDetails.dueDate);
      const today = new Date();
      return dueDate < today;
    } catch {
      return false;
    }
  };

  return (
    <Card className="p-4 lg:p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <Receipt className="h-5 w-5 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Detalhes da Fatura</h3>
            <p className="text-sm text-gray-600">Informações de pagamento da conta atual</p>
          </div>
        </div>
        {billDetails.secondCopyLink && (
          <a
            href={billDetails.secondCopyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
          >
            <ExternalLink className="h-4 w-4" />
            2ª Via
          </a>
        )}
      </div>

      {/* Valor e Data de Vencimento */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <CreditCard className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Valor Total</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">
            {billDetails.amount.toLocaleString('pt-BR', { 
              style: 'currency', 
              currency: 'BRL' 
            })}
          </p>
        </div>

        <div className={`rounded-lg p-4 ${isOverdue() ? 'bg-red-50' : 'bg-gray-50'}`}>
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">Vencimento</span>
          </div>
          <p className={`text-xl font-bold ${isOverdue() ? 'text-red-600' : 'text-gray-900'}`}>
            {formatDueDate(billDetails.dueDate)}
          </p>
          {isOverdue() && (
            <p className="text-xs text-red-600 mt-1">Conta vencida</p>
          )}
        </div>
      </div>

      {/* Código de Barras */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-700">Código de Barras</label>
          <button
            onClick={() => copyToClipboard(billDetails.barCode, 'barcode')}
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700"
          >
            <Copy className="h-3 w-3" />
            {copiedField === 'barcode' ? 'Copiado!' : 'Copiar'}
          </button>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm break-all">
          {formatBarCode(billDetails.barCode)}
        </div>
      </div>

      {/* PIX */}
      {billDetails.pix && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">PIX Copia e Cola</label>
            <button
              onClick={() => copyToClipboard(billDetails.pix, 'pix')}
              className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700"
            >
              <Copy className="h-3 w-3" />
              {copiedField === 'pix' ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm break-all max-h-20 overflow-y-auto">
            {billDetails.pix}
          </div>
        </div>
      )}

      {/* Formas de Pagamento */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">Formas de Pagamento</h4>
        <div className="text-sm text-blue-800 space-y-1">
          <p>• <strong>PIX:</strong> Copie o código acima e cole no seu app bancário</p>
          <p>• <strong>Código de Barras:</strong> Use o código para pagamento em bancos ou lotéricas</p>
          <p>• <strong>2ª Via:</strong> Baixe uma nova via em caso de perda do boleto original</p>
        </div>
      </div>
    </Card>
  );
}
