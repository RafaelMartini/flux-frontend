import api from './api';
import { metricCards, financialChartData, paymentSummary, additionalMetrics } from '../data/mockData';

export const dashboardService = {
  async getMetrics(startDate?: string, endDate?: string, product?: string, platform?: string) {
    try {
      const response = await api.get('/metrics', { params: { startDate, endDate, product, platform } });
      return response.data;
    } catch (error) {
      console.log('Falling back to mock data for metrics');
      return {
        metricCards,
        additionalMetrics
      };
    }
  },

  async getChartData(startDate?: string, endDate?: string) {
    try {
      const response = await api.get('/chart-data', { params: { startDate, endDate } });
      return response.data;
    } catch (error) {
      console.log('Falling back to mock data for chart');
      return financialChartData;
    }
  },

  async getPaymentSummary(startDate?: string, endDate?: string) {
    try {
      const response = await api.get('/payment-summary', { params: { startDate, endDate } });
      return response.data;
    } catch (error) {
      console.log('Falling back to mock data for payment summary');
      return paymentSummary;
    }
  }
};