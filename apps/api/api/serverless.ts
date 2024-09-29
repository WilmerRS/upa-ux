import { initializeServer } from "../src/initializeServer";
import initializeEnvConfig from "../src/config/env.config";

initializeEnvConfig();

const app = initializeServer();

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
