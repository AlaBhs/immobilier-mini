import { useMutation, useQueryClient } from "@tanstack/react-query";
import { propertyApi } from "../api/property.api";
import type { PropertyFormValues } from "../validators/property.validator";

export function useCreateProperty() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: propertyApi.create,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["properties"] });
    },
  });
}

export function useUpdateProperty() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: PropertyFormValues }) =>
      propertyApi.update(id, data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["properties"] });
    },
  });
}