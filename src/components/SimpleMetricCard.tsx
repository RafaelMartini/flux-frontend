import React from 'react';
import { SimpleMetricCard as SimpleMetricCardType } from '../types/dashboard';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Props {
  data: SimpleMetricCardType;
}

const SimpleMetricCard: React.FC<Props> = ({ data }) => {
  const getTrend = () => {
    const trend = parseFloat(String(data.value).replace(/[^0-9.-]/g, ''));
    return !isNaN(trend) && trend > 0;
  };

  return (
    <div className="bg-[#1a1625] rounded-xl p-4 relative overflow-hidden group hover:scale-105 transition-transform duration-200">
      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-2">
          <span className="text-gray-400 text-sm">{data.title}</span>
          {getTrend() ? (
            <TrendingUp className="text-green-500" size={16} />
          ) : (
            <TrendingDown className="text-red-500" size={16} />
          )}
        </div>
        <span className="text-white text-xl font-bold block">{data.value}</span>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/5 rounded-full blur-xl"></div>
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500/5 rounded-full blur-lg"></div>
    </div>
  );
};

export default SimpleMetricCard;