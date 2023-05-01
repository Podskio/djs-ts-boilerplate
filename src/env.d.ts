import { z } from "zod";

const env = z.object({
  CLIENT_ID: z.string().min(1),
  TOKEN: z.string().min(1),
});

env.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof env> {}
  }
}
