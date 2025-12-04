import type { Property } from "../../../models/property.model";
import { PropertyCard } from "../components/PropertyCard";

interface Props {
  properties: Property[];
  onDelete: (id: string) => void;
  city: string;
  maxPrice: string;
  onCityChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
}


export function PropertyListView({
  properties,
  onDelete,
  city,
  maxPrice,
  onCityChange,
  onMaxPriceChange,
}: Props) {
  return (
    <div className="container">
      <h1 className="page-title">Annonces immobilières</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Filtrer par ville..."
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
        />

        <input
          type="number"
          placeholder="Prix max"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(e.target.value)}
        />
      </div>

      <div className="grid-cards">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onDelete={() => onDelete(property.id)}
          />
        ))}
      </div>

      {properties.length === 0 && (
        <p style={{ marginTop: 20 }}>Aucune annonce trouvée.</p>
      )}
    </div>
  );
}

