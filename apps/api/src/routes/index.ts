import { FastifyInstance } from "fastify";

export function registerRoutes(app: FastifyInstance) {
  //   const routes = globSync(__dirname + "/**/*.route.*");
  //   routes
  //     .map((routePath) => {
  //       const fileNameRegex = /[\/\\]([^\/\\]+)\.route(?=\.ts$)/;
  //       const fileName = routePath.match(fileNameRegex);
  //       if (!fileName) {
  //         app.log.error(` - [ ] Skipping route: ${routePath}`);
  //         return null;
  //       }

  //       const route = fileName[1];
  //       return `./${route}.route`;
  //     })
  //     .filter((routePath) => routePath !== null)
  //     .forEach((routePath) => register(app, routePath));
  const routes = ["app", "health"];

  routes
    .map((routePath) => {
      return `./${routePath}.route`;
    })
    .filter((routePath) => routePath !== null)
    .forEach((routePath) => register(app, routePath));
}

function register(app: FastifyInstance, routePath: string) {
  app.log.info(` - [x] Registering route: ${routePath}`);
  const route = require(routePath);
  route.register(app);
}
