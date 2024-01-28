import { z } from 'zod';

export const User = z.object({
  _id: z.number(),
  username: z.string().min(1).max(255),
  email: z.string().email(),
  password: z.string(),
});

export const UserInputDTO = z.object({
  username: z.string().min(1).max(255),
  email: z.string().email(),
  password: z.string(),
  remember: z.boolean().optional(),
});

export type IUserInputDTO = z.infer<typeof UserInputDTO>;
export type IUser = z.infer<typeof User>;
