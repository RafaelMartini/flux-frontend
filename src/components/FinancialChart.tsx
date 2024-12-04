import React, { useState } from 'react';
import { ChartData } from '../types/dashboard';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface Props {
  data: ChartData[];
}

const FinancialChart: React.FC<Props> = ({ data }) => {
  const [selectedSeries, setSelectedSeries] = useState<string[]>(['Lucro Líquido', 'Despesas Totais']);

  const formattedData = data.map(item => ({
    ...item,
    "Lucro Líquido": item.value,
    "Despesas Totais": Math.round(item.value * 0.7)
  }));

  const toggleSeries = (series: string) => {
    setSelectedSeries(prev => {
      if (prev.includes(series)) {
        return prev.filter(s => s !== series);
      }
      return [...prev, series];
    });
  };

  return (
    <div className="bg-[#1a1625] rounded-xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-white"></div>
          <span className="text-white">Resumo financeiro</span>
        </div>
      </div>

      <div className="h-64 w-full mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={formattedData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorLucro" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorDespesas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2435" />
            <XAxis
              dataKey="label"
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#2a2435',
                border: 'none',
                borderRadius: '8px',
                color: '#fff'
              }}
              itemStyle={{ color: '#fff' }}
              labelStyle={{ color: '#9CA3AF' }}
            />
            {selectedSeries.includes('Lucro Líquido') && (
              <Area
                type="monotone"
                dataKey="Lucro Líquido"
                stroke="#3B82F6"
                fillOpacity={1}
                fill="url(#colorLucro)"
              />
            )}
            {selectedSeries.includes('Despesas Totais') && (
              <Area
                type="monotone"
                dataKey="Despesas Totais"
                stroke="#8B5CF6"
                fillOpacity={1}
                fill="url(#colorDespesas)"
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => toggleSeries('Lucro Líquido')}
          className={`text-sm transition-colors ${
            selectedSeries.includes('Lucro Líquido')
              ? 'text-blue-500'
              : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          Lucro Líquido
        </button>
        <button
          onClick={() => toggleSeries('Despesas Totais')}
          className={`text-sm transition-colors ${
            selectedSeries.includes('Despesas Totais')
              ? 'text-purple-500'
              : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          Despesas Totais
        </button>
      </div>
    </div>
  );
};

export default FinancialChart;