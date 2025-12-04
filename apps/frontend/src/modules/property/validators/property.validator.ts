import { z } from "zod";

export const propertySchema = z.object({
  title: z.string().min(3),
  city: z.string().min(2),
  price: z.number().positive(),
  surface: z.number().positive(),
});

export type PropertyFormValues = z.infer<typeof propertySchema>;
