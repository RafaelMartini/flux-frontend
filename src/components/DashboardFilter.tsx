import React from 'react';
import { Calendar, Filter } from 'lucide-react';

interface FilterProps {
  startDate: string;
  endDate: string;
  selectedProduct: string;
  selectedPlatform: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onProductChange: (product: string) => void;
  onPlatformChange: (platform: string) => void;
  onFilter: () => void;
}

const DashboardFilter: React.FC<FilterProps> = ({
  startDate,
  endDate,
  selectedProduct,
  selectedPlatform,
  onStartDateChange,
  onEndDateChange,
  onProductChange,
  onPlatformChange,
  onFilter,
}) => {
  const products = ['Todos', 'Produto A', 'Produto B', 'Produto C'];
  const platforms = ['Todos', 'Hotmart', 'Perfect Pay', 'Eduzz', 'Ticto', 'Pepper'];

  return (
    <div className="bg-[#1a1625] rounded-xl p-4 mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-gray-400" />
          <span className="text-white">Filtros:</span>
        </div>
        
        <div className="flex flex-wrap gap-4 w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-gray-400" />
            <input
              type="date"
              value={startDate}
              onChange={(e) => onStartDateChange(e.target.value)}
              className="bg-[#2a2435] text-white px-3 py-1.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-gray-400" />
            <input
              type="date"
              value={endDate}
              onChange={(e) => onEndDateChange(e.target.value)}
              className="bg-[#2a2435] text-white px-3 py-1.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <select
            value={selectedProduct}
            onChange={(e) => onProductChange(e.target.value)}
            className="bg-[#2a2435] text-white px-3 py-1.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>

          <select
            value={selectedPlatform}
            onChange={(e) => onPlatformChange(e.target.value)}
            className="bg-[#2a2435] text-white px-3 py-1.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>

          <button
            onClick={onFilter}
            className="bg-purple-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-purple-700 transition-colors"
          >
            Filtrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardFilter;