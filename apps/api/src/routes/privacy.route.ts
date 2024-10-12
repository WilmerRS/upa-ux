import { FastifyInstance } from 'fastify'

const html = `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
    />
    <title>Política de privacidad | UPA UX</title>
    <meta
      name="description"
      content="Política de privacidad de la UPA UX Api"
    />
  </head>
  <body>
    <main>
        <section aria-labelledby="intro">
            <h1 id="intro">Política de Privacidad</h1>
            <br />
            <p>En UPA UX, valoramos la privacidad y seguridad de nuestros usuarios. Esta política de privacidad tiene como objetivo proporcionar una descripción clara y transparente de cómo se maneja la información en relación con el uso de nuestra extensión. Queremos asegurar que nuestros usuarios entiendan que no se recopila, procesa ni comparte información personal mediante el uso de esta herramienta.</p>
        </section>
        
        <hr />

        <section aria-labelledby="datos-usuario">
            <h3 id="datos-usuario">Recopilación de datos de usuarios</h3>
            <p>UPA UX no recopila, almacena, ni transmite ningún tipo de información personal identificable. La extensión ha sido diseñada exclusivamente para mejorar la experiencia de usuario en el Vortal de la Universidad de Pamplona sin interactuar con los datos sensibles de los usuarios. Toda la información proporcionada durante el proceso de inicio de sesión se mantiene local en el dispositivo del usuario y no se envía a servidores externos.</p>
        </section>

        <section aria-labelledby="uso-datos">
            <h3 id="uso-datos">Uso de datos de usuarios</h3>
            <p>Dado que no recopilamos datos personales, no existe ningún uso o procesamiento de dichos datos. El propósito principal de la extensión es mejorar la interfaz de usuario del Vortal, facilitando el acceso y la interacción del usuario sin interferir en la seguridad o privacidad de la información personal.</p>
        </section>

        <section aria-labelledby="terceros">
            <h3 id="terceros">Compartición de datos con terceros</h3>
            <p>UPA UX no comparte información de usuarios con terceros, ya que no se recopilan datos. No realizamos ningún tipo de integración con servicios de terceros que puedan implicar la transferencia de información personal. Nuestra extensión se ejecuta localmente en el navegador del usuario, garantizando que no se envíe ni comparta ninguna información fuera del dispositivo del usuario.</p>
        </section>

        <section aria-labelledby="relacion-universidad">
            <h3 id="relacion-universidad">Relación con la Universidad de Pamplona</h3>
            <p>Es importante destacar que UPA UX no tiene ninguna relación oficial con la Universidad de Pamplona. La extensión es un proyecto independiente, desarrollado con el objetivo de mejorar la usabilidad del Vortal de la universidad. No estamos afiliados, patrocinados ni respaldados por la Universidad de Pamplona. La extensión se ofrece tal cual, sin ninguna relación formal con la institución.</p>
        </section>

        <section aria-labelledby="cambios-politica">
            <h3 id="cambios-politica">Cambios en la política de privacidad</h3>
            <p>Nos reservamos el derecho de modificar o actualizar esta política de privacidad en cualquier momento, con el fin de reflejar mejoras en nuestra extensión o cambios en la legislación vigente. Cualquier modificación será publicada en esta misma página, por lo que te recomendamos revisar periódicamente nuestra política de privacidad para estar informado de posibles actualizaciones.</p>
        </section>

        <section aria-labelledby="contacto">
            <h3 id="contacto">Contacto</h3>
            <p>Si tienes preguntas o inquietudes sobre esta política de privacidad, o sobre el uso de la extensión UPA UX, no dudes en ponerte en contacto con nosotros a través de nuestro repositorio de GitHub. Estamos comprometidos con la transparencia y la mejora continua, y valoramos cualquier comentario o sugerencia que puedas tener.</p>
        </section>
    </main>

    <br />
    <hr />

    <footer>
        <p>&copy; %[YEAR]% UPA UX. Proyecto de código abierto. Todos los derechos reservados.</p>
    </footer>
  </body>
</html>
`

export default (app: FastifyInstance, _opts, done) => {
  const completeHtml = html.replace('%[YEAR]%', new Date().getFullYear().toString())
  app.get('/privacy', (_request, reply) => {
    reply
      .status(200)
      .headers({
        'Cache-Control':
          'public, s-maxage=10800, max-age=10800, stale-while-revalidate=10800',
      })
      .type('text/html')
      .send(completeHtml)
  })

  done()
}
