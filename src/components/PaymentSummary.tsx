import React, { useState } from 'react';
import { PaymentSummary as PaymentSummaryType } from '../types/dashboard';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface Props {
  data: PaymentSummaryType[];
}

const PaymentSummary: React.FC<Props> = ({ data }) => {
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([
    'Aprovadas',
    'Canceladas',
    'Análise',
    'Chargeback'
  ]);

  const metrics = [
    { key: 'Aprovadas', color: '#3B82F6' },
    { key: 'Canceladas', color: '#EF4444' },
    { key: 'Análise', color: '#8B5CF6' },
    { key: 'Chargeback', color: '#F59E0B' }
  ];

  const formattedData = data.map(item => ({
    name: item.method,
    ...(selectedMetrics.includes('Aprovadas') && { Aprovadas: item.approved }),
    ...(selectedMetrics.includes('Canceladas') && { Canceladas: item.cancelled }),
    ...(selectedMetrics.includes('Análise') && { Análise: item.analysis }),
    ...(selectedMetrics.includes('Chargeback') && { Chargeback: item.chargeback })
  }));

  const toggleMetric = (metric: string) => {
    setSelectedMetrics(prev => {
      if (prev.includes(metric)) {
        return prev.filter(m => m !== metric);
      }
      return [...prev, metric];
    });
  };

  return (
    <div className="bg-[#1a1625] rounded-xl p-6">
      <div className="flex flex-col space-y-4 mb-4">
        <h2 className="text-white text-lg">Resumo de Pagamentos</h2>
      </div>
      
      <div className="h-64 w-full mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={formattedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2435" />
            <XAxis
              dataKey="name"
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
            {selectedMetrics.includes('Aprovadas') && (
              <Bar dataKey="Aprovadas" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            )}
            {selectedMetrics.includes('Canceladas') && (
              <Bar dataKey="Canceladas" fill="#EF4444" radius={[4, 4, 0, 0]} />
            )}
            {selectedMetrics.includes('Análise') && (
              <Bar dataKey="Análise" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            )}
            {selectedMetrics.includes('Chargeback') && (
              <Bar dataKey="Chargeback" fill="#F59E0B" radius={[4, 4, 0, 0]} />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center gap-4">
        {metrics.map(metric => (
          <button
            key={metric.key}
            onClick={() => toggleMetric(metric.key)}
            className={`text-sm transition-colors ${
              selectedMetrics.includes(metric.key)
                ? `text-[${metric.color}]`
                : 'text-gray-400 hover:text-gray-300'
            }`}
            style={{
              color: selectedMetrics.includes(metric.key)
                ? metric.color
                : undefined
            }}
          >
            {metric.key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentSummary;