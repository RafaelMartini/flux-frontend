export interface MetricCard {
  title: string;
  value: number;
  trend: number;
  icon: string;
  color: string;
}

export interface ChartData {
  label: string;
  value: number;
}

export interface PaymentSummary {
  method: string;
  value: number;
  approved: number;
  cancelled: number;
  analysis: number;
  chargeback: number;
}

export interface SimpleMetricCard {
  title: string;
  value: string | number;
}