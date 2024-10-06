import { FastifyInstance } from 'fastify'

export default (app: FastifyInstance, opts, done) => {
  app.get('/health', async (_request, reply) => {
    try {
      reply.status(200).send({
        message: 'Ok'
      })
    } catch (e) {
      reply.status(500).send({
        message: 'Failed'
      })
    }
  })

  done()
}
