import { z } from "zod";

// UK phone regex: mobile or landline
const ukPhoneRegex = /^(?:(?:\+44\s?|0)(?:7\d{3}|\d{2,4})\s?\d{3,4}\s?\d{3,4})$/;

export const requestCallSchema = z
    .object({
        name: z.string().min(2, "Please enter your name"),
        email: z.string().email("Please enter a valid email").or(z.literal("")),
        phone: z
            .string()
            .regex(ukPhoneRegex, "Please enter a valid UK phone number")
            .or(z.literal("")),
        area: z.string().optional(),
        message: z.string().optional(),
        // Honeypot — real users never see or fill this
        botcheck: z.string().optional(),
    })
    .refine((data) => data.email !== "" || data.phone !== "", {
        message: "Please provide either an email address or a phone number",
        path: ["email"],
    });

export type RequestCallFormData = z.infer<typeof requestCallSchema>;
