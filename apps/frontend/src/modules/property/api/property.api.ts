import { http } from '../../../core/api/http';
import type { Property } from '../../../models/property.model';

export const propertyApi = {
  getAll: async (
    page = 1,
    limit = 6,
    city?: string,
    maxPrice?: number
  ): Promise<{
    data: Property[];
    meta: { page: number; limit: number; total: number; totalPages: number };
  }> => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    if (city) params.append("city", city);
    if (maxPrice !== undefined) params.append("maxPrice", maxPrice.toString());

    const { data } = await http.get(`/items?${params.toString()}`);
    return data;
  },
  getOne: async (id: string): Promise<Property> => {
    const { data } = await http.get(`/items/${id}`);
    return data;
  },
  create: async (property: Omit<Property, 'id'>): Promise<Property> => {
    const { data } = await http.post('/items', property);
    return data;
  },
  update: async (id: string, property: Omit<Property, 'id'>): Promise<Property> => {
    const { data } = await http.put(`/items/${id}`, property);
    return data;
  },
  delete: async (id: string): Promise<void> => {
    await http.delete(`/items/${id}`);
  },
};
