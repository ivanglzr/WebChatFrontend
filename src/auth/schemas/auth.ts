import { z } from "zod";

const emailSchema = z
  .string()
  .email()
  .max(100, "Email can't be longer than 100 characters");

const passwordSchema = z
  .string()
  .min(6, "Password must be atleast 6 characters long")
  .max(100, "Password can't be longer than 100 characters");

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerSchema = loginSchema.extend({
  fullname: z.string(),
});

export function validateLoginData(data: unknown) {
  return loginSchema.safeParse(data);
}

export function validateRegisterData(data: unknown) {
  return registerSchema.safeParse(data);
}
