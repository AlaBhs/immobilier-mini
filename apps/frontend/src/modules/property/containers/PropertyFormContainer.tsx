import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { propertySchema, type PropertyFormValues } from "../validators/property.validator";
import { useCreateProperty, useUpdateProperty } from "../hooks/usePropertyMutation";
import { useProperty } from "../hooks/useProperty";
import { PropertyFormView } from "../presentations/PropertyFormView";

export function PropertyFormContainer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode = Boolean(id);

  const createMutation = useCreateProperty();
  const updateMutation = useUpdateProperty();

  const { data: propertyData, isLoading } = useProperty(id!, {
    enabled: isEditMode,
  });

  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(propertySchema),
  });

  // ✅ Pré-remplir le formulaire en mode édition
  useEffect(() => {
    if (propertyData) {
      form.reset({
        title: propertyData.title,
        city: propertyData.city,
        price: propertyData.price,
        surface: propertyData.surface,
      });
    }
  }, [propertyData, form]);

  const onSubmit = (data: PropertyFormValues) => {
    if (isEditMode) {
      // ✅ MODE ÉDITION → PUT
      updateMutation.mutate(
        { id: id!, data },
        {
          onSuccess: () => navigate("/"),
        }
      );
    } else {
      // ✅ MODE CRÉATION → POST
      createMutation.mutate(data, {
        onSuccess: () => navigate("/"),
      });
    }
  };

  if (isEditMode && isLoading) {
    return <p className="loading">Chargement...</p>;
  }

  return (
    <PropertyFormView
      form={form}
      onSubmit={onSubmit}
      isEditMode={isEditMode}
      isLoading={createMutation.isPending || updateMutation.isPending}
    />
  );
}
