import initializeEnvConfig from "../config/env.config";
import { createServer } from "../createServer";

initializeEnvConfig();

export default async function handler(req: any, res: any) {
  const server = await createServer();
  try {
    await server.ready();
    server.server.emit("request", req, res);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
