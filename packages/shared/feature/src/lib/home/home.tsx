"use client";

import { Button, Card } from "@acme/shared-ui";
import { formatDate } from "@acme/shared-util";

export function Home() {
  const date = new Date();

  return (
    <Card className="space-y-4">
      <p>Current Date: {formatDate(date)}</p>
      <h1>Welcome to the Home Page</h1>
      <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
    </Card>
  );
}
