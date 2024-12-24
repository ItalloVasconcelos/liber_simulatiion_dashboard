// src/validationSchemas.ts
import { z } from "zod";

export const pessoaFisicaSchema = z.object({
    fullName: z.string().min(3, "O nome completo deve ter pelo menos 3 caracteres."),
    email: z.string().email("Email inválido."),
    cpf: z.string().regex(/^\d{11}$/, "CPF deve conter 11 números."),
    phone: z.string().regex(/^\d{10,11}$/, "Celular deve conter 10 ou 11 números.").optional(),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem coincidir.",
    path: ["confirmPassword"],
});

export const empresaSchema = z.object({
    contactName: z.string().min(3, "O nome para contato deve ter pelo menos 3 caracteres."),
    email: z.string().email("Email inválido."),
    cnpj: z.string().regex(/^\d{14}$/, "CNPJ deve conter 14 números."),
    corporateName: z.string().optional(),
    companyName: z.string().optional(),
    phone: z.string().regex(/^\d{10,11}$/, "Telefone deve conter 10 ou 11 números."),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem coincidir.",
    path: ["confirmPassword"],
});
