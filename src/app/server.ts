import Fastify from 'fastify';
import type { FastifyBaseLogger } from 'fastify';
import { registerRoutes } from './routes';
import { setupLogger } from '../infra/logger';
import { loadEnv } from '../infra/env';

export async function createServer() {
  loadEnv();
  const fastify = Fastify({
    logger: setupLogger() as unknown as FastifyBaseLogger,
  });
  await registerRoutes(fastify);
  return fastify;
}
