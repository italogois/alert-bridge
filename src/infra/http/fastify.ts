import Fastify from 'fastify';
import { setupLogger } from '../logger';

export function buildServer() {
  return Fastify({ logger: setupLogger() });
}
