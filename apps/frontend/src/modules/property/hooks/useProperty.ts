import { useQuery } from "@tanstack/react-query";
import { propertyApi } from "../api/property.api";
import type { Property } from "../../../models/property.model";

export function useProperty(
  id: string,
  options?: { enabled?: boolean }
) {
  return useQuery<Property>({
    queryKey: ["property", id],
    queryFn: () => propertyApi.getOne(id),
    enabled: options?.enabled ?? true,
  });
}

