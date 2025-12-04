import type { UseFormReturn } from "react-hook-form";
import type { PropertyFormValues } from "../validators/property.validator";
import { Button } from "../../../components/atoms/Button";
import { Input } from "../../../components/atoms/Input";

interface Props {
  form: UseFormReturn<PropertyFormValues>;
  onSubmit: (data: PropertyFormValues) => void;
  isEditMode: boolean;
  isLoading: boolean;
}

export function PropertyFormView({
  form,
  onSubmit,
  isEditMode,
  isLoading,
}: Props) {
  const { register, handleSubmit, formState } = form;

  return (
    <div className="container">
      <h1 className="page-title">
        {isEditMode ? "Modifier l’annonce" : "Créer une annonce"}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="card">

        <div className="form-group">
          <label className="label">Titre</label>
          <Input {...register("title")} />
          {formState.errors.title && (
            <p className="form-error">{formState.errors.title.message}</p>
          )}
        </div>

        <div className="form-group">
          <label className="label">Ville</label>
          <Input {...register("city")} />
        </div>

        <div className="form-group">
          <label className="label">Prix</label>
          <Input type="number" {...register("price", { valueAsNumber: true })} />
        </div>

        <div className="form-group">
          <label className="label">Surface</label>
          <Input type="number" {...register("surface", { valueAsNumber: true })} />
        </div>

        <Button disabled={isLoading}>
          {isLoading
            ? "Chargement..."
            : isEditMode
            ? "Modifier"
            : "Créer"}
        </Button>
      </form>
    </div>
  );
}
