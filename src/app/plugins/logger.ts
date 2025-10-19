import pino from 'pino';

export function setupLogger() {
  return pino({ transport: { target: 'pino-pretty' } });
}
