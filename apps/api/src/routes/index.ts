import { FastifyInstance } from "fastify";
import { globSync } from "glob";

export function registerRoutes(app: FastifyInstance) {
  const routes = globSync(__dirname + "/**/*.route.*");
  routes
    .map((routePath) => {
      const fileNameRegex = /[\/\\]([^\/\\]+)\.route(?=\.ts$)/;
      const fileName = routePath.match(fileNameRegex);
      if (!fileName) {
        return null;
      }

      const route = fileName[1];
      return `./${route}.route`;
    })
    .filter((routePath) => routePath !== null)
    .forEach((routePath) => register(app, routePath));
}

function register(app: FastifyInstance, routePath: string) {
  app.log.info(` - [x] Registering route: ${routePath}`);
  const route = require(routePath);
  route.register(app);
}
