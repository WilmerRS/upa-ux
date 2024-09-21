export default class LoadingTargetCreator {
  create ({ appId }: { appId: string }) {
    const body = document.createElement('body')
    body.id = appId
    body.style.height = '100vh'
    body.style.width = '100vw'
    body.style.overflow = 'hidden'

    const frameset: any = document.getElementsByTagName('frameset')[0]
    frameset.style.display = 'none'

    document.firstChild?.insertBefore(body, frameset)

    return document
  }

  remove ({ appId }: { appId: string }) {
    const body = document.getElementById(appId)
    body?.remove()
  }
}
