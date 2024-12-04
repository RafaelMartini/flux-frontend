export interface AdCampaign {
  id: string;
  sales: number;
  revenue: string;
  expenses: string;
  profit: string;
  budget: string;
  status: 'active' | 'inactive';
  days: string;
}

export interface AdTableProps {
  campaigns: AdCampaign[];
  onToggleStatus: (id: string) => void;
}