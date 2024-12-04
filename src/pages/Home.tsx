import React, { useState } from 'react';
import MetricCard from '../components/MetricCard';
import SimpleMetricCard from '../components/SimpleMetricCard';
import FinancialChart from '../components/FinancialChart';
import PaymentSummary from '../components/PaymentSummary';
import DashboardFilter from '../components/DashboardFilter';
import { metricCards, financialChartData, paymentSummary, additionalMetrics } from '../data/mockData';

const Home = () => {
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedProduct, setSelectedProduct] = useState('Todos');
  const [selectedPlatform, setSelectedPlatform] = useState('Todos');

  const handleStartDateChange = (date: string) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: string) => {
    setEndDate(date);
  };

  const handleProductChange = (product: string) => {
    setSelectedProduct(product);
  };

  const handlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform);
  };

  const handleFilter = () => {
    console.log('Applied Filters:', {
      startDate,
      endDate,
      selectedProduct,
      selectedPlatform
    });
  };

  return (
    <main className="p-6 overflow-hidden">
      <DashboardFilter
        startDate={startDate}
        endDate={endDate}
        selectedProduct={selectedProduct}
        selectedPlatform={selectedPlatform}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
        onProductChange={handleProductChange}
        onPlatformChange={handlePlatformChange}
        onFilter={handleFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {metricCards.map((card, index) => (
          <MetricCard key={index} data={card} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <FinancialChart data={financialChartData} />
        <PaymentSummary data={paymentSummary} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {additionalMetrics.map((metric, index) => (
          <SimpleMetricCard key={index} data={metric} />
        ))}
      </div>
    </main>
  );
};

export default Home;