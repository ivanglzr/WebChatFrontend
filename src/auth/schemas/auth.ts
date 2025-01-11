import { z } from "zod";

const emailSchema = z
  .string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  })
  .email()
  .max(100, "Email can't be longer than 100 characters");

const passwordSchema = z
  .string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  })
  .min(6, "Password must be atleast 6 characters long")
  .max(100, "Password can't be longer than 100 characters");

const fullnameSchema = z
  .string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  })
  .min(2, "Name must be atleast 2 characters long")
  .max(50, "Name can't be longer than 50 characters");

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerSchema = loginSchema.extend({
  fullname: fullnameSchema,
});

export function validateLoginData(data: unknown) {
  return loginSchema.safeParse(data);
}

export function validateRegisterData(data: unknown) {
  return registerSchema.safeParse(data);
}
