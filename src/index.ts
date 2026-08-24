/// <reference types="node" />

import { startFlowServer } from '@genkit-ai/express';
import { exampleFlow } from './ai/flows/example';
import { incidentSummaryFlow } from './ai/flows/incident-summary';

// Start a standalone Express server that exposes your Genkit flows
// as HTTP endpoints. Each flow is accessible at /<flowName>.
startFlowServer({
  flows: [exampleFlow, incidentSummaryFlow],
});
