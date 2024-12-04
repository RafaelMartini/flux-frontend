import React from 'react';
import { AdTableProps } from '../types/ads';
import { Pencil, Trash2, Copy, MoreVertical } from 'lucide-react';

const AdManager: React.FC<AdTableProps> = ({ campaigns, onToggleStatus }) => {
  const totalSales = campaigns.reduce((acc, campaign) => acc + campaign.sales, 0);
  const totalRevenue = 'R$ 1.439,98';
  const totalExpenses = 'R$ 590,63';
  const totalProfit = 'R$ 5024,00';
  const activeCount = campaigns.filter(campaign => campaign.status === 'active').length;

  return (
    <div className="bg-[#1a1625] rounded-xl p-6 overflow-x-auto">
      <h2 className="text-white text-lg mb-6">Gerênciados de Anúncios Utm's</h2>

      <div className="min-w-[800px]">
        <div className="grid grid-cols-9 gap-4 text-gray-400 text-sm border-b border-gray-800 pb-3">
          <div>Campanha</div>
          <div>Vendas</div>
          <div>Receitas</div>
          <div>Gastos</div>
          <div>Lucro</div>
          <div>Orçamento</div>
          <div>Veiculação</div>
          <div>Dias ativo</div>
          <div>Ações</div>
        </div>

        {campaigns.map((campaign, index) => (
          <div key={index} className="grid grid-cols-9 gap-4 items-center py-4 border-b border-gray-800">
            <div className="text-white">{campaign.id}</div>
            <div className="text-white">{campaign.sales}</div>
            <div className="text-white">{campaign.revenue}</div>
            <div className="text-white">{campaign.expenses}</div>
            <div className="text-white">{campaign.profit}</div>
            <div className="text-white">{campaign.budget}</div>
            <div className="flex items-center space-x-2">
              <span className={`inline-block w-2 h-2 rounded-full ${campaign.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></span>
              <span className="text-white">{campaign.status === 'active' ? 'Ativo' : 'Desativado'}</span>
            </div>
            <div className="text-white">{campaign.days}</div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onToggleStatus(campaign.id)}
                className={`px-3 py-1 rounded-lg text-sm ${
                  campaign.status === 'active'
                    ? 'bg-red-500 bg-opacity-20 text-red-500 hover:bg-opacity-30'
                    : 'bg-green-500 bg-opacity-20 text-green-500 hover:bg-opacity-30'
                } transition-colors`}
              >
                {campaign.status === 'active' ? 'Desativar' : 'Ativar'}
              </button>
              <button className="p-1 rounded-lg bg-blue-500 bg-opacity-20 text-blue-500 hover:bg-opacity-30">
                <Copy size={16} />
              </button>
              <button className="p-1 rounded-lg bg-purple-500 bg-opacity-20 text-purple-500 hover:bg-opacity-30">
                <Pencil size={16} />
              </button>
              <button className="p-1 rounded-lg bg-red-500 bg-opacity-20 text-red-500 hover:bg-opacity-30">
                <Trash2 size={16} />
              </button>
              <button className="p-1 rounded-lg bg-gray-500 bg-opacity-20 text-gray-500 hover:bg-opacity-30">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-9 gap-4 items-center py-4 font-medium">
          <div className="text-white">Total</div>
          <div className="text-white">{totalSales}</div>
          <div className="text-white">{totalRevenue}</div>
          <div className="text-white">{totalExpenses}</div>
          <div className="text-white">{totalProfit}</div>
          <div></div>
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-white">{activeCount} Ativos</span>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AdManager;