import LoadingTargetCreator from '../infrastructure/web/LoadingTargetCreator'
import UnipamplonaVortalLoadListener from '../infrastructure/web/UnipamplonaVortalLoadListener'
import CreateReactApp from '../presentation/CreateReactApp'

export default class Main {
  private readonly _unipamplonaVortalLoadListener: UnipamplonaVortalLoadListener
  private readonly _createReactApp: CreateReactApp
  private readonly _loadingTargetCreator: LoadingTargetCreator

  constructor () {
    this._unipamplonaVortalLoadListener = new UnipamplonaVortalLoadListener()
    this._createReactApp = new CreateReactApp()
    this._loadingTargetCreator = new LoadingTargetCreator()
  }

  async start () {
    const loadingPageId = 'unipamplona-vortal-loading-page'
    const loadingBodyId = `${loadingPageId}-body`
    const loginPageId = 'unipamplona-vortal-login-page'

    const document = this._loadingTargetCreator.create({
      appId: loadingBodyId
    })

    this._createReactApp.render({
      targetDocument: document,
      page: 'loading',
      appId: loadingPageId
    })

    const frames = await this._unipamplonaVortalLoadListener.getWindowFrames()
    if (frames == null) {
      return
    }

    this._createReactApp.render({
      targetDocument: frames.documentFrame,
      page: 'login',
      appId: loginPageId
    })

    this._loadingTargetCreator.remove({ appId: loadingBodyId })
  }
}
