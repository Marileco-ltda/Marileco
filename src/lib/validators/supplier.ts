import { z } from "zod";

export const supplierSchema = z.object({
  name: z
    .string()
    .min(3, "O nome do fornecedor deve ter no mínimo 3 caracteres"),

  email: z
    .string()
    .email("E-mail inválido")
    .optional()
    .or(z.literal("")),

  phone: z
    .string()
    .min(8, "Telefone inválido")
    .optional()
    .or(z.literal("")),
});

export type SupplierInput = z.infer<typeof supplierSchema>;
