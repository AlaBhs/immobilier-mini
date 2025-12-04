import { useState } from "react";
import { useProperties } from "../hooks/useProperties";
import { useDeleteProperty } from "../hooks/useDeleteProperty";
import type { Property } from "../../../models/property.model";
import { PropertyListView } from "../presentations/PropertyListView";

export function PropertyListContainer() {
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [city, setCity] = useState("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const { data, isLoading, isError, error } = useProperties(
    page,
    limit,
    city,
    maxPrice ? Number(maxPrice) : undefined
  );

  const { mutate: deleteProperty } = useDeleteProperty();

  if (isLoading) return <div className="loading">Chargement...</div>;
  if (isError) return <div className="error">{error?.message}</div>;

  const properties: Property[] = data?.data || [];
  const totalPages = data?.meta.totalPages || 1;

  return (
    <div>
      <PropertyListView
        properties={properties}
        onDelete={deleteProperty}
        city={city}
        maxPrice={maxPrice}
        onCityChange={(c) => {
          setCity(c);
          setPage(1);
        }}
        onMaxPriceChange={(p) => {
          setMaxPrice(p);
          setPage(1);
        }}
      />

      <div className="pagination mt-4 flex justify-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              page === i + 1 ? "bg-gray-300" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
