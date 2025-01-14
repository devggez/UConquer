import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "title is required.").max(255),
  inputVal: z.string().min(1, "Input Value is required.").max(255),
  outputVal: z.string().min(1, "Output Value is required.").max(255),
  description: z
    .string()
    .min(1, "description is required.")
    .max(65535)
    .optional(),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "title is required.").max(255).optional(),
  description: z
    .string()
    .min(1, "description is required.")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required.")
    .max(255)
    .optional()
    .nullable(),
});
