import cors from "@fastify/cors";
import formbody from "@fastify/formbody";
import helmet from "@fastify/helmet";
import fastify from "fastify";
import { getLogger } from "./config/logger";

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
    />
    <title>UPA UX Api</title>
    <meta
      name="description"
      content="UPA UX Api for Unipamplona content"
    />
  </head>
  <body>
    <h1>UPA UX Api</h1>
    <hr />
    <p>
      Welcome to the UPA UX Api for Unipamplona content.
    <p>
  </body>
</html>
`;

export const createServer = async () => {
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
    reply.status(200).type("text/html").send(html);
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

  return server;
};
