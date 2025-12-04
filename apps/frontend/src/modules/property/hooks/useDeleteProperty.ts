import { useMutation, useQueryClient } from "@tanstack/react-query";
import { propertyApi } from "../api/property.api";

export function useDeleteProperty() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: propertyApi.delete,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["properties"] });
    },
  });
}
