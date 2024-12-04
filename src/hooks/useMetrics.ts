import { useQuery } from '@tanstack/react-query';
import { dashboardService } from '../services/dashboardService';

export function useMetrics(startDate?: string, endDate?: string, product?: string, platform?: string) {
  return useQuery({
    queryKey: ['metrics', startDate, endDate, product, platform],
    queryFn: () => dashboardService.getMetrics(startDate, endDate, product, platform)
  });
}