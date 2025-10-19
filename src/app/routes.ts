import { FastifyInstance } from "fastify";
import { registerSentryRoutes } from "../integrations/sentry/sentry.controller";

export async function registerRoutes(app: FastifyInstance) {
  app.register(registerSentryRoutes, { prefix: "/webhook" });

  app.get("/health", function (request, reply) {
    reply.send({
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
    });
  });
}
