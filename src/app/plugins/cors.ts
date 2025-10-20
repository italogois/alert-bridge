import fp from 'fastify-plugin';
import fastifyCors from '@fastify/cors';

export default fp(async function (fastify) {
  await fastify.register(fastifyCors, { origin: true });
});
