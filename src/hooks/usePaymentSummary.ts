import { useQuery } from '@tanstack/react-query';
import { dashboardService } from '../services/dashboardService';

export function usePaymentSummary(startDate?: string, endDate?: string) {
  return useQuery({
    queryKey: ['paymentSummary', startDate, endDate],
    queryFn: () => dashboardService.getPaymentSummary(startDate, endDate)
  });
}