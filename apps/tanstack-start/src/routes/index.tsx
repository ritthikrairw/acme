import { createFileRoute } from "@tanstack/react-router";

import { env } from "~/lib/env";

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => {
    return {
      APP_DESCRIPTION: env.APP_DESCRIPTION,
      APP_NAME: env.APP_NAME,
      APP_VERSION: env.APP_VERSION
    };
  }
});

function Home() {
  const serverEnv = Route.useLoaderData();

  return (
    <div className="p-2">
      <h3 className="mb-6">Welcome Home!!!</h3>
      <p className="mb-2 text-xl font-semibold">Environments</p>
      <p className="text-lg font-semibold">
        Server-side Environment Variables: (using loader)
      </p>
      <ul>
        <li className="text-sm">
          <strong>APP_NAME:</strong> {serverEnv.APP_NAME}
        </li>
        <li className="text-sm">
          <strong>APP_DESCRIPTION:</strong> {serverEnv.APP_DESCRIPTION}
        </li>
        <li className="text-sm">
          <strong>APP_VERSION:</strong> {serverEnv.APP_VERSION}
        </li>
      </ul>
      <p className="mt-4 text-lg font-semibold">
        Client-side Environment Variables: (using env)
      </p>
      <ul>
        <li className="text-sm">
          <strong>VITE_APP_NAME:</strong> {env.VITE_APP_NAME}
        </li>
        <li className="text-sm">
          <strong>VITE_APP_DESCRIPTION:</strong> {env.VITE_APP_DESCRIPTION}
        </li>
        <li className="text-sm">
          <strong>VITE_APP_VERSION:</strong> {env.VITE_APP_VERSION}
        </li>
      </ul>
    </div>
  );
}
