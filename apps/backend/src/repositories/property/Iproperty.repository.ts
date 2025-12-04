import { Property } from "../../models/property.model";

export interface IPropertyRepository {
  findAll(
    page: number,
    limit: number,
    city?: string,
    maxPrice?: number
  ): Promise<{
    data: Property[];
    meta: { page: number; limit: number; total: number; totalPages: number };
  }>;

  findById(id: string): Promise<Property | undefined>;
  create(property: Property): Promise<Property>;
  update(id: string, data: Partial<Property>): Promise<Property | null>;
  delete(id: string): Promise<void>;
}
