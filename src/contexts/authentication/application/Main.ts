import LoadingPage from "../infrastructure/web/LoadingPage";
import UnipamplonaVortalLoadListener from "../infrastructure/web/UnipamplonaVortalLoadListener";
import CreateReactApp from "../presentation/CreateReactApp";

export default class Main {
  private _unipamplonaVortalLoadListener: UnipamplonaVortalLoadListener;
  private _createReactApp: CreateReactApp;
  private _loadingPage: LoadingPage;

  constructor() {
    this._unipamplonaVortalLoadListener = new UnipamplonaVortalLoadListener();
    this._createReactApp = new CreateReactApp();
    this._loadingPage = new LoadingPage();
  }

  start() {
    this._loadingPage.start();
    this._unipamplonaVortalLoadListener.listen({
      onLoad: ({ documentFrame }) => {
        this._createReactApp.render({
          documentFrame,
        });
        this._loadingPage.stop();
      },
    });
  }
}
