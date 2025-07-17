import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  client: {
    VITE_APP_DESCRIPTION: z.string().nonempty(),
    VITE_APP_NAME: z.string().nonempty(),
    VITE_APP_VERSION: z.string().nonempty()
  },
  clientPrefix: "VITE_",
  emptyStringAsUndefined: true,
  runtimeEnvStrict: {
    APP_DESCRIPTION: process.env.APP_DESCRIPTION,
    APP_NAME: process.env.APP_NAME,
    APP_VERSION: process.env.APP_VERSION,
    VITE_APP_DESCRIPTION: import.meta.env.VITE_APP_DESCRIPTION,
    VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
    VITE_APP_VERSION: import.meta.env.VITE_APP_VERSION
  },
  server: {
    APP_DESCRIPTION: z.string().nonempty(),
    APP_NAME: z.string().nonempty(),
    APP_VERSION: z.string().nonempty()
  },
  skipValidation: true
});
