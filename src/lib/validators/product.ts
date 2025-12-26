import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter no mínimo 3 caracteres"),

  description: z
    .string()
    .optional(),

  price: z
    .coerce
    .number()
    .positive("O preço deve ser maior que zero"),
});

export type ProductInput = z.infer<typeof productSchema>;
