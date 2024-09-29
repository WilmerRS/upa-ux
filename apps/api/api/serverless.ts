import { initializeServerlessEnvConfig } from "../src/config/env.config";
import { initializeServer } from "../src/initializeServer";

initializeServerlessEnvConfig();

const app = initializeServer();

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
