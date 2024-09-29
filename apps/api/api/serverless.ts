import initializeEnvConfig from "../src/config/env.config";
import { initializeServer } from "../src/initializeServer";

initializeEnvConfig({
  serverless: true,
});

const app = initializeServer();

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
