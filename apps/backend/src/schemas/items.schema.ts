import { z } from "zod";

/**
 * Payload pour créer / modifier un bien immobilier
 */
export const ItemInputSchema = z.object({
  title: z.string().min(1, "Title is required"),
  city: z.string().min(1, "City is required"),
  price: z.number().positive("Price must be positive"),
  surface: z.number().positive().optional(),
});

/**
 * Paramètre d’URL : ID
 */
export const ItemParamsSchema = z.object({
  id: z.uuid(),
});

/**
 * Type complet d’un Item
 */
export type Item = z.infer<typeof ItemInputSchema> & {
  id: string;
};
