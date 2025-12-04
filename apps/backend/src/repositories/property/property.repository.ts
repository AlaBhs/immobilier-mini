import { Property } from "../../models/property.model";
import { seedProperties } from "../../seeds/property.seed";
import { IPropertyRepository } from "./Iproperty.repository";

let properties: Property[] = [...seedProperties];

export class PropertyRepository implements IPropertyRepository {
  async findAll(page: number, limit: number, city?: string, maxPrice?: number) {
    let filtered = properties;

    if (city) {
      filtered = filtered.filter((p) =>
        p.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    if (maxPrice !== undefined) {
      filtered = filtered.filter((p) => p.price <= maxPrice);
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / limit);

    const start = (page - 1) * limit;
    const data = filtered.slice(start, start + limit);

    return {
      data,
      meta: { page, limit, total, totalPages },
    };
  }

  async findById(id: string) {
    return properties.find((p) => p.id === id);
  }

  async create(property: Property) {
    properties.push(property);
    return property;
  }

  async update(id: string, data: Partial<Property>) {
    const index = properties.findIndex((p) => p.id === id);
    if (index === -1) return null;

    properties[index] = { ...properties[index], ...data };
    return properties[index];
  }

  async delete(id: string) {
    properties = properties.filter((p) => p.id !== id);
  }
}
