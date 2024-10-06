import { SwaggerOptions } from '@fastify/swagger'
import { FastifySwaggerUiOptions } from '@fastify/swagger-ui'

export const swaggerConfig: SwaggerOptions = {
  openapi: {
    openapi: '3.0.3',
    info: {
      title: 'UPA UX API',
      description: 'API for Unipamplona content',
      version: '1.0.0'
    }
  }
}

export const swaggerUIConfig: FastifySwaggerUiOptions = {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  }
}
