import { useQuery } from '@tanstack/react-query';
import { propertyApi } from '../api/property.api';

export function useProperties(
  page = 1,
  limit = 6,
  city?: string,
  maxPrice?: number
) {
  return useQuery({
    queryKey: ["properties", page, city, maxPrice],
    queryFn: () => propertyApi.getAll(page, limit, city, maxPrice),
  });
}
