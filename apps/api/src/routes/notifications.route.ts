import { FastifyInstance } from 'fastify'
import { parseHTML } from 'linkedom'

interface Notification {
  title: string
  description: string
  image: string
  link: string
}

const pageUrl = 'https://www.unipamplona.edu.co'

export default (app: FastifyInstance, _opts, done) => {
  app.get('/api/unipamplona/notifications', async (_request, reply) => {
    const response = await fetch(pageUrl)
    const html = await response.text()
    const { document } = parseHTML(html)
    const items = document.querySelectorAll('.uk-slidenav-position')
    const slide = items[0]
    const notifications: Notification[] = []

    const slides = slide.querySelectorAll('li')
    slides.forEach((slide) => {
      const title = slide.querySelector('h3')?.textContent
      const description = slide.querySelector('p')?.textContent
      const link = slide.querySelector('a')?.getAttribute('href') ?? null
      const image = slide.querySelector('img')?.getAttribute('src') ?? null

      if (!link || !image) return

      notifications.push({
        title: title ?? '',
        description: description ?? '',
        link: pageUrl + link,
        image: pageUrl + image
      })
    })

    reply
      .status(200)
      .headers({
        'Cache-Control':
          'public, s-maxage=3600, max-age=3600, stale-while-revalidate=3600'
      })
      .type('application/json')
      .send({
        data: notifications,
        total: notifications.length
      })
  })

  done()
}
