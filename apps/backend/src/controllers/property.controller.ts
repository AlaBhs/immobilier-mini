import { FastifyReply, FastifyRequest } from "fastify";
import { propertyService } from "../services/property/property.service.instance";
import {
  createPropertySchema,
  updatePropertySchema,
} from "../schemas/property.schema";

export class PropertyController {
  static async getAll(
    request: FastifyRequest<{
      Querystring: {
        page?: string;
        limit?: string;
        city?: string;
        maxPrice?: string;
      };
    }>,
    reply: FastifyReply
  ) {
    const { page = "1", limit = "6", city, maxPrice } = request.query;

    const result = await propertyService.findAll(
      Number(page),
      Number(limit),
      city,
      maxPrice ? Number(maxPrice) : undefined
    );

    reply.send(result);
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    const property = await propertyService.findOne(request.params.id);

    if (!property) {
      return reply.status(404).send({ message: "Property not found" });
    }

    reply.send(property);
  }

  static async create(request: FastifyRequest, reply: FastifyReply) {
    const parsed = createPropertySchema.parse(request.body);

    const property = await propertyService.create(parsed);

    reply.status(201).send(property);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    const parsed = updatePropertySchema.parse(request.body);

    const property = await propertyService.update(request.params.id, parsed);

    if (!property) {
      return reply.status(404).send({ message: "Property not found" });
    }

    reply.send(property);
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    const deleted = await propertyService.delete(request.params.id);

    reply.status(204).send();
  }
}
