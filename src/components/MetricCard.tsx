import React from 'react';
import * as LucideIcons from 'lucide-react';
import { MetricCard as MetricCardType } from '../types/dashboard';

interface Props {
  data: MetricCardType;
}

const MetricCard: React.FC<Props> = ({ data }) => {
  const IconComponent = LucideIcons[data.icon as keyof typeof LucideIcons];

  if (!IconComponent) {
    console.warn(`Icon ${data.icon} not found`);
    return null;
  }

  return (
    <div className="bg-[#1a1625] rounded-xl p-4 flex flex-col space-y-4">
      <div className="flex justify-between items-start">
        <span className="text-gray-400 text-sm">{data.title}</span>
        <div className={`p-2 rounded-lg bg-opacity-20 ${data.color === 'orange' ? 'bg-orange-500' : 'bg-blue-500'}`}>
          <IconComponent className={`${data.color === 'orange' ? 'text-orange-500' : 'text-blue-500'}`} size={20} />
        </div>
      </div>
      
      <div className="flex items-end justify-between">
        <span className="text-white text-2xl font-bold">
          R$ {data.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </span>
        <span className={`text-sm ${data.trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {data.trend >= 0 ? '+' : ''}{data.trend}%
        </span>
      </div>
      
      <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className={`h-full ${data.color === 'orange' ? 'bg-orange-500' : 'bg-blue-500'}`}
          style={{ width: `${Math.abs(data.trend)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MetricCard;