import { z } from 'zod';

export const createPropertySchema = z.object({
  title: z.string().min(3),
  city: z.string().min(2),
  price: z.number().positive(),
  surface: z.number().positive(),
});

export const updatePropertySchema = z.object({
  title: z.string().min(3).optional(),
  city: z.string().min(2).optional(),
  price: z.number().positive().optional(),
  surface: z.number().positive().optional(),
});
