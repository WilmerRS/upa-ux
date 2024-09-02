interface DocumentFrame {
  document: Document;
  documentFrame: Document;
  window: Window & typeof globalThis;
}

export default class UnipamplonaVortalLoadListener {
  getWindowFrames(): Promise<DocumentFrame | null> {
    return new Promise((resolve) => {
      window.onload = () => {
        resolve(this._onWindowLoad());
      };
    });
  }

  _onWindowLoad(): DocumentFrame | null {
    const documentFrame = window.frames[1].document;

    if (!documentFrame) return null;

    if (documentFrame.querySelector("body > table")) {
      const table: any = documentFrame.querySelector("body > table");
      if (!table?.style) {
        return null;
      }
      table.style.display = "none";
    }

    const cssNode = document.createElement("link");

    cssNode.type = "text/css";
    cssNode.rel = "stylesheet";
    cssNode.href = `chrome-extension://${chrome.runtime.id}/assets/authentication.css`;

    documentFrame.head.appendChild(cssNode);

    return {
      document,
      documentFrame,
      window,
    };
  }
}
