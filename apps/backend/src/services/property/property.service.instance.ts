import { PropertyService } from './property.service';
import { PropertyRepository } from '../../repositories/property/property.repository';

const propertyRepository = new PropertyRepository();
const propertyService = new PropertyService(propertyRepository);

export { propertyService };
