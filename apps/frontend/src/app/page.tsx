'use client';

import { Home } from '@acme/shared-feature';
import { Button, Card } from '@acme/shared-ui';
import { formatDate } from '@acme/shared-util';

export default function Index() {
  const date = new Date();

  return (
    <main>
      <Card>
        <p>Current Date: {formatDate(date)}</p>
        <h1>Welcome to the Home Page</h1>
        <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
      </Card>
      <Home />
    </main>
  );
}
