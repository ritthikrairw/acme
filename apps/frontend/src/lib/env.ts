import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_NAME: z.string().nonempty(),
    NEXT_PUBLIC_APP_VERSION: z.string().nonempty(),
  },
  runtimeEnv: {
    API_KEY: process.env.API_KEY,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
  },
  server: {
    API_KEY: z.string().nonempty(),
  },
});
