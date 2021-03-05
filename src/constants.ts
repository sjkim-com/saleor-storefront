export const apiUrl = process.env.API_URI;
export const sentryDsn = process.env.SENTRY_DSN;
const sampleRate = parseFloat(process.env.SENTRY_APM);
export const sentrySampleRate = isNaN(sampleRate) ? 0 : sampleRate;
export const serviceWorkerTimeout =
  parseInt(process.env.SERVICE_WORKER_TIMEOUT, 10) || 60 * 1000;
export const demoMode = process.env.DEMO_MODE === "true";

// EC Intelligence 用
export const eciAccount = process.env.ECI_ACCOUNT;
export const eciHost = process.env.ECI_HOST;
export const eciDebug = process.env.ECI_DEBUG;
