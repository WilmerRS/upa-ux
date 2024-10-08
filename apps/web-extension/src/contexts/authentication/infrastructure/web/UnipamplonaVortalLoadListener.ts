interface DocumentFrame {
  document: Document
  documentFrame: Document
  window: Window & typeof globalThis
}

export default class UnipamplonaVortalLoadListener {
  async getWindowFrames (): Promise<DocumentFrame | null> {
    return await new Promise((resolve) => {
      window.onload = () => {
        resolve(this._onWindowLoad())
      }
    })
  }

  private _onWindowLoad (): DocumentFrame | null {
    const documentFrame = window.frames[1].document

    if (!documentFrame) return null

    if (documentFrame.querySelector('body > table') != null) {
      const table: any = documentFrame.querySelector('body > table')
      if (!table?.style) {
        return null
      }
      table.style.display = 'none'
    }

    const cssNode = document.createElement('link')

    cssNode.type = 'text/css'
    cssNode.rel = 'stylesheet'
    cssNode.href = `chrome-extension://${chrome.runtime.id}/assets/authentication.css`

    documentFrame.head.appendChild(cssNode)

    documentFrame.body.style.height = '100vh'
    documentFrame.body.style.width = '100vw'

    this._listenDOMChanges(documentFrame.body, () => {
      console.log(' [👋] [UnipamplonaVortalLoadListener] DOM changed -> documentFrame.body')
    })

    this._listenDOMChanges(document.body, () => {
      console.log(' [👋] [UnipamplonaVortalLoadListener] DOM changed -> document')
    })

    this._listenDOMChanges(window.document.body, () => {
      console.log(' [👋] [UnipamplonaVortalLoadListener] DOM changed -> window.document')
    })

    return {
      document,
      documentFrame,
      window
    }
  }

  private _listenDOMChanges (obj: any, callback: () => void) {
    if (!obj || obj.nodeType !== 1) {
      return
    }

    const MutationObserver = window.MutationObserver
    if (MutationObserver) {
      const mutationObserver = new MutationObserver(callback)
      mutationObserver.observe(obj, { childList: true, subtree: true })
      return mutationObserver
    }

    obj.addEventListener('DOMNodeInserted', callback, false)
    obj.addEventListener('DOMNodeRemoved', callback, false)
  }
}
