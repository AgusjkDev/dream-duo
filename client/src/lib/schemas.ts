import { z } from "zod";

import { MAX_BIRTHDATE, MAX_HEIGHT, MAX_WEIGHT, MIN_BIRTHDATE } from "./constants";
import regex from "./regex";

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
const birthdate = z
    .date({ required_error: "This field is required." })
    .min(MIN_BIRTHDATE, { message: "Invalid birth date." })
    .max(MAX_BIRTHDATE, { message: "Invalid birth date." });

export const loginSchema = z.object({
    email,
    password,
});

export const signupSchema = loginSchema
    .extend({
        firstname,
        lastname,
        birthdate,
        confirmPassword: z.string().refine(Boolean, { message: "This field is required." }),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords don't match!",
    });

export const profileSchema = z.object({
    firstname: firstname.optional(),
    lastname: lastname.optional(),
    birthdate: birthdate.optional(),
    weight: z
        .number({ required_error: "This field is required." })
        .min(1, {
            message: "Weight must be greater than zero! Make sure it is expressed in kilograms.",
        })
        .max(MAX_WEIGHT, {
            message:
                "Weight exceeds maximum limit specified in terms of service. Make sure it is expressed in kilograms.",
        })
        .optional(),
    height: z
        .number({ required_error: "This field is required." })
        .min(1, {
            message: "Height must be greater than zero! Make sure it is expressed in centimeters.",
        })
        .max(MAX_HEIGHT, {
            message:
                "Height exceeds maximum limit specified in terms of service. Make sure it is expressed in centimeters.",
        })
        .optional(),
});
