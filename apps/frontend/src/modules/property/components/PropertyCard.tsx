import { useNavigate } from "react-router-dom";
import type { Property } from "../../../models/property.model";
import { useState } from "react";

interface Props {
  property: Property;
  onDelete: () => void;
}

export function PropertyCard({ property, onDelete }: Props) {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);

    setTimeout(() => {
      onDelete();
    }, 200);
  };

  return (
    <div className={`card ${isDeleting ? "card-deleting" : ""}`}>
      <h3>{property.title}</h3>
      <p>{property.city}</p>
      <p>{property.price} €</p>

      <div className="actions">
        <button onClick={() => navigate(`/properties/${property.id}`)}>
          Voir
        </button>

        <button onClick={() => navigate(`/properties/edit/${property.id}`)}>
          Modifier
        </button>

        <button className="danger" onClick={handleDelete}>
          Supprimer
        </button>
      </div>
    </div>
  );
}
