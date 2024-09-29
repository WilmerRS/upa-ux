import cors from "@fastify/cors";
import formbody from "@fastify/formbody";
import helmet from "@fastify/helmet";
import fastify from "fastify";
import { getLogger } from "./config/logger";
import { registerRoutes } from "./routes";

export const initializeServer = () => {
  const logger = getLogger();
  const server = fastify({
    logger,
  });

  server.register(formbody);
  server.register(cors);
  server.register(helmet);

  // Set error handler
  server.setErrorHandler((error, _request, reply) => {
    server.log.error(error);
    reply.status(500).send({ error: "Something went wrong" });
  });

  registerRoutes(server);

  // Graceful shutdown
  const signals: NodeJS.Signals[] = ["SIGINT", "SIGTERM"];
  signals.forEach((signal) => {
    process.on(signal, async () => {
      try {
        await server.close();
        server.log.error(`Closed application on ${signal}`);
        process.exit(0);
      } catch (err) {
        server.log.error(`Error closing application on ${signal}`, err);
        process.exit(1);
      }
    });
  });

  return server;
};
