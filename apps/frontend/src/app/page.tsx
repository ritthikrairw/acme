import { Home } from "@acme/shared-feature";

import { env } from "../lib/env";

export default function Index() {
  return (
    <main className="container mx-auto p-4">
      <div className="grid gap-6">
        <div>
          <p className="mb-2 text-lg font-semibold">Home Feature</p>
          <Home />
        </div>
        <div>
          <p className="mb-2 text-lg font-semibold">Environments</p>
          <ul>
            {Object.entries(env).map(([key, value]) => (
              <li className="text-sm" key={key}>
                <strong>{key}:</strong> {String(value)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
