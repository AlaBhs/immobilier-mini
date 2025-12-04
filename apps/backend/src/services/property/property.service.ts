import { IPropertyRepository } from "../../repositories/property/Iproperty.repository";

export class PropertyService {
  constructor(private repo: IPropertyRepository) {}

  findAll(page: number, limit: number, city?: string, maxPrice?: number) {
    return this.repo.findAll(page, limit, city, maxPrice);
  }

  findOne(id: string) {
    return this.repo.findById(id);
  }

  create(property: any) {
    return this.repo.create(property);
  }

  update(id: string, data: any) {
    return this.repo.update(id, data);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }
}
