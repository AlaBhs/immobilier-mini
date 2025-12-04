import { useParams } from "react-router-dom";
import { useProperty } from "../hooks/useProperty";
import { PropertyDetailView } from "../presentations/PropertyDetailView";

export function PropertyDetailContainer() {
  const { id } = useParams();
  const { data, isLoading } = useProperty(id!);

  if (isLoading) return <p className="loading">Chargement...</p>;
  if (!data) return <p>Introuvable</p>;

  return <PropertyDetailView property={data} />;
}
