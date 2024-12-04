import { useQuery } from '@tanstack/react-query';
import { dashboardService } from '../services/dashboardService';

export function useChartData(startDate?: string, endDate?: string) {
  return useQuery({
    queryKey: ['chartData', startDate, endDate],
    queryFn: () => dashboardService.getChartData(startDate, endDate)
  });
}