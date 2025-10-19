import { FastifyInstance } from "fastify";
import { registerSentryRoutes } from "../integrations/sentry/sentry.controller";

export async function registerRoutes(app: FastifyInstance) {
  app.register(registerSentryRoutes, { prefix: "/webhook" });

  app.get("/", function (request, reply) {
    reply.send({ hello: "world" });
  });
}
