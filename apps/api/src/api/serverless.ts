import { createServer } from "src/createServer";
import initializeEnvConfig from "../config/env.config";

initializeEnvConfig();

const app = createServer();

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
