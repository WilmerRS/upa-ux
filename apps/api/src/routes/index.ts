import { FastifyInstance } from "fastify";
import { globSync } from "glob";

export function registerRoutes(app: FastifyInstance) {
  const routes = globSync(__dirname + "/**/*.route.*");
  routes
    .map((routePath) => {
      const route = routePath.replace(/\.ts$/, "").split("routes")[1];
      return `.${route}`;
    })
    .forEach((routePath) => register(app, routePath));
}

function register(app: FastifyInstance, routePath: string) {
  const route = require(routePath);
  route.register(app);
}
