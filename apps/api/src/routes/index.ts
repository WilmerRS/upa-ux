import { FastifyInstance } from "fastify";

import { register as appRoutesRegister } from "./app.route";
import { register as healthRoutesRegister } from "./health.route";

export function registerRoutes(app: FastifyInstance) {
  const routes = [appRoutesRegister, healthRoutesRegister];
  routes.forEach((register) => register(app));
}
