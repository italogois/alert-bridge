import { FastifyInstance } from "fastify";
import { handleSentryAlert } from "./sentry.service";

export async function registerSentryRoutes(app: FastifyInstance) {
  app.post("/sentry", async (req, reply) => {
    try {
      const payload = req.body;
      await handleSentryAlert(payload);
      reply.code(200).send({ status: "ok" });
    } catch (error) {
      app.log.error(error);
      reply.code(500).send({ error: "Failed to process alert" });
    }
  });
}
