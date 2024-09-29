import { initializeServer } from "src/initializeServer";
import initializeEnvConfig from "../config/env.config";

initializeEnvConfig();

const app = initializeServer();

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
