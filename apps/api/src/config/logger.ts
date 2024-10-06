const loggers = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname'
      }
    }
  },
  production: true
}

export const getLogger = () => {
  return loggers[process.env.APP_ENV || 'development']
}
