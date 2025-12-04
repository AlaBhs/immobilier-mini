import type { Property } from "../../../models/property.model";
import { useNavigate } from "react-router-dom";
import { useDeleteProperty } from "../hooks/useDeleteProperty";
import { Button } from "../../../components/atoms/Button";

interface Props {
  property: Property;
}

export function PropertyDetailView({ property }: Props) {
  const navigate = useNavigate();
  const { mutate } = useDeleteProperty();

  const handleDelete = () => {
    if (confirm("Supprimer cette annonce ?")) {
      mutate(property.id, {
        onSuccess: () => navigate("/"),
      });
    }
  };
  return (
    <div className="container property-detail">
      <h1 className="page-title">{property.title}</h1>

      <div className="card">
        <p>
          <strong>Ville :</strong> {property.city}
        </p>
        <p>
          <strong>Prix :</strong> {property.price} TND
        </p>
        <p>
          <strong>Surface :</strong> {property.surface} m²
        </p>
      </div>

      <Button variant="danger" onClick={handleDelete}>
        Supprimer
      </Button>
    </div>
  );
}
