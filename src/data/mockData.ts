import { MetricCard, ChartData, PaymentSummary, SimpleMetricCard } from '../types/dashboard';

export const metricCards: MetricCard[] = [
  {
    title: 'Faturamento Total',
    value: 12694.93,
    trend: 12,
    icon: 'trending-up',
    color: 'orange',
  },
  {
    title: 'ROAS',
    value: 4772.18,
    trend: 8,
    icon: 'dollar-sign',
    color: 'blue',
  },
  {
    title: 'Investimento em Trafego (ADS)',
    value: 3612.65,
    trend: -5,
    icon: 'activity',
    color: 'blue',
  },
  {
    title: 'Lucro Líquido',
    value: 4772.18,
    trend: 15,
    icon: 'pie-chart',
    color: 'blue',
  },
  {
    title: 'Margem de Lucro',
    value: 8442.55,
    trend: 10,
    icon: 'bar-chart',
    color: 'orange',
  },
];

export const financialChartData: ChartData[] = [
  { label: 'Jan', value: 20 },
  { label: 'Feb', value: 35 },
  { label: 'Mar', value: 45 },
  { label: 'Apr', value: 75 },
  { label: 'May', value: 55 },
  { label: 'Jun', value: 40 },
  { label: 'Jul', value: 65 },
  { label: 'Aug', value: 90 },
  { label: 'Sep', value: 100 },
];

export const paymentSummary: PaymentSummary[] = [
  {
    method: 'Cartão de crédito',
    value: 1000,
    approved: 1000,
    cancelled: 110,
    analysis: 2339,
    chargeback: 90,
  },
  {
    method: 'Pix',
    value: 1000,
    approved: 1000,
    cancelled: 110,
    analysis: 2339,
    chargeback: 90,
  },
  {
    method: 'Boleto',
    value: 1000,
    approved: 1000,
    cancelled: 110,
    analysis: 2339,
    chargeback: 90,
  },
];

export const additionalMetrics: SimpleMetricCard[] = [
  { title: 'Faturamento Total', value: 'R$ 5.030.500,00' },
  { title: 'ROAS', value: '1,50' },
  { title: 'Investimento em Trafego', value: 'R$ 30 Mil' },
  { title: 'Lucro Líquido', value: 'R$ 60 Mil' },
  { title: 'Margem de Lucro', value: '20.00%' },
  { title: 'Custo de Produto', value: 'R$ 10 Mil' },
  { title: 'ROI', value: '1.20' },
  { title: 'ARPU', value: 'R$ 50,00' },
  { title: 'Reembolso', value: 'R$ 500,00' },
  { title: 'Compras Aprovadas', value: 'R$ 700,00' },
  { title: 'Compras Pendentes', value: 'R$ 200,00' },
  { title: 'Custo por Compra', value: 'R$ 100,00' },
  { title: 'Ticket Médio', value: 'R$ 150,00' },
  { title: 'Taxas e Impostos', value: 'R$ 800,00' },
  { title: 'Cartão de Crédito', value: 'R$ 5 Mil' },
  { title: 'Pix', value: 'R$ 3 Mil' },
  { title: 'Boleto', value: 'R$ 2 Mil' },
  { title: 'Despesas Recorrentes', value: 'R$ 1 Mil' },
  { title: 'Despesas Variadas', value: 'R$ 1.500,00' },
  { title: 'Despesas Totais Atuais', value: 'R$ 2.500,00' },
];