import cors from "@fastify/cors";
import formbody from "@fastify/formbody";
import helmet from "@fastify/helmet";
import fastify from "fastify";
import initializeEnvConfig from "./config/env.config";
import { getLogger } from "./config/logger";

initializeEnvConfig();

const port = Number(process.env.API_PORT) || 5001;
const host = String(process.env.API_HOST);

const startServer = async () => {
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

  server.get("/health", async (_request, reply) => {
    try {
      reply.status(200).send({
        message: "Ok",
      });
    } catch (e) {
      reply.status(500).send({
        message: "Failed",
      });
    }
  });

  server.get("/api/health", async (_request, reply) => {
    try {
      reply.status(200).send({
        message: "Ok",
      });
    } catch (e) {
      reply.status(500).send({
        message: "Failed",
      });
    }
  });

  server.get("/", (request, reply) => {
    reply.status(200).send({ message: "Upa UX API" });
  });

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

  try {
    await server.listen({
      port,
      host,
    });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

// Handle unhandled rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  process.exit(1);
});

startServer();
