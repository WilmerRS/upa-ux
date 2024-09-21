import RedirectTransactionWebToNewTab from '../infrastructure/web/RedirectTransactionWebToNewTab'

export default class Main {
  private readonly _redirectTransactionWebToNewTab: RedirectTransactionWebToNewTab
  constructor () {
    this._redirectTransactionWebToNewTab = new RedirectTransactionWebToNewTab()
  }

  start () {
    this._redirectTransactionWebToNewTab.redirect()
  }
}
