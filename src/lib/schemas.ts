import { z } from "zod";

import regex from "./regex";
import { MIN_AGE, MAX_AGE } from "./constants";

const email = z.string().email({ message: "Invalid email address format." });
const password = z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .max(128, { message: "Password is too long!" })
    .regex(regex.password, {
        message:
            "Password must contain at least one lowercase letter, one uppercase letter, one number, and one symbol.",
    });
const firstname = z
    .string()
    .min(3, { message: "First name must be at least 3 characters long." })
    .max(35, { message: "First name is too long!" })
    .regex(regex.name, { message: "Invalid first name format." });
const lastname = z
    .string()
    .min(3, { message: "Last name must be at least 3 characters long." })
    .max(35, { message: "Last name is too long!" })
    .regex(regex.name, { message: "Invalid last name format." });
const age = z
    .number({ required_error: "A" })
    .min(MIN_AGE, {
        message: `Age must be greater or equal to ${MIN_AGE}!`,
    })
    .max(MAX_AGE, {
        message: "Age exceeds maximum limit specified in terms of service.",
    });

export const loginSchema = z.object({
    email,
    password,
});

export const signupSchema = loginSchema
    .extend({
        firstname,
        lastname,
        age,
        confirmPassword: z.string().refine(Boolean, { message: "This field is required." }),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords don't match!",
    });
