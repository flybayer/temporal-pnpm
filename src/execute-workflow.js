import { Connection, WorkflowClient } from '@temporalio/client';
import { example } from './workflows.js';

async function run() {
  const connection = new Connection(); // Connect to localhost with default ConnectionOptions.
  // In production, pass options to the Connection constructor to configure TLS and other settings.
  // This is optional but we leave this here to remind you there is a gRPC connection being established.

  const client = new WorkflowClient(connection.service, {
    // In production you will likely specify `namespace` here; it is 'default' if omitted
  });

  // Invoke the `example` Workflow, only resolved when the workflow completes
  const result = await client.execute(example, {
    taskQueue: 'hello-javascript',
    workflowId: 'my-business-id',
    args: ['Temporal'],
  });
  console.log(result); // Hello, Temporal!
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
