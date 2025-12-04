import { FastifyInstance } from 'fastify';
import { PropertyController } from '../controllers/property.controller';

export async function itemsRoutes(fastify: FastifyInstance) {
  fastify.get('/items', PropertyController.getAll);
  fastify.get('/items/:id', PropertyController.getById);
  fastify.post('/items', PropertyController.create);
  fastify.put('/items/:id', PropertyController.update);
  fastify.delete('/items/:id', PropertyController.delete);
}
