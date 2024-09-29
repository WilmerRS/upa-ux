import cors from "@fastify/cors";
import formbody from "@fastify/formbody";
import helmet from "@fastify/helmet";
import fastify from "fastify";
import initializeEnvConfig from "../config/env.config";
import { getLogger } from "src/config/logger";

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

initializeEnvConfig();

const logger = getLogger();
const app = fastify({
  logger,
});

app.register(formbody);
app.register(cors);
app.register(helmet);

// Set error handler
app.setErrorHandler((error, _request, reply) => {
  app.log.error(error);
  reply.status(500).send({ error: "Something went wrong" });
});

app.get("/health", async (_request, reply) => {
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

app.get("/", (request, reply) => {
  reply.status(200).type("text/html").send(html);
});

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
}
