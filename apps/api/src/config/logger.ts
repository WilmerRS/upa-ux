const loggers = {
  development: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
  production: true,
};

export const getLogger = () => {
  return loggers[process.env.NODE_ENV || "development"];
};
