import initializeEnvConfig from "./config/env.config";
import { initializeServer } from "./initializeServer";

initializeEnvConfig({
  serverless: false,
});

const port = Number(process.env.API_PORT) || 5001;
const host = String(process.env.API_HOST);

const startServer = async () => {
  const server = initializeServer();
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
