import { FastifyInstance } from 'fastify'

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
    />
    <title>UPA UX Api</title>
    <meta
      name="description"
      content="UPA UX Api for Unipamplona content"
    />
  </head>
  <body>
    <h1>UPA UX Api</h1>
    <hr />
    <p>
      Welcome to the UPA UX Api for Unipamplona content.
    <p>
  </body>
</html>
`

export default (app: FastifyInstance, opts, done) => {
  app.get('/', (_request, reply) => {
    reply.status(200).type('text/html').send(html)
  })

  done()
}
