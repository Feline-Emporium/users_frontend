import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

//Sentry error tracking

Sentry.init({
  dsn: "https://b35bc584f0414d08bf7a6f424476f0ee@o4505121849606144.ingest.sentry.io/4505121857470464",
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
