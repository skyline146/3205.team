import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

const GetUsersSchema = z.object({
  email: z.string().regex(/^([\w.]+)@([a-zA-Z]{3,}).([a-zA-Z]{2,4})$/, {
    message: "Invalid email format",
  }),
  number: z
    .string()
    .regex(/^\d{6}$/, {
      message: "Invalid phone number format",
    })
    .optional(),
});

export class GetUsersDto extends createZodDto(GetUsersSchema) {}
