export default class UnipamplonaVortalLoadListener {
  listen({ onLoad }: { onLoad: (documents: any) => void }) {
    window.onload = () => {
      this._onWindowLoad({ onLoad });
    };
  }

  _onWindowLoad({ onLoad }: { onLoad: (documents: any) => void }) {
    const documentFrame = window.frames[1].document;

    if (!documentFrame) return;

    if (documentFrame.querySelector("body > table")) {
      const table: any = documentFrame.querySelector("body > table");
      if (!table?.style) {
        return;
      }
      table.style.display = "none";
    }

    const cssNode = document.createElement("link");

    cssNode.type = "text/css";
    cssNode.rel = "stylesheet";
    cssNode.href = `chrome-extension://${chrome.runtime.id}/assets/index.css`;

    documentFrame.head.appendChild(cssNode);

    onLoad({
      document,
      documentFrame,
      window,
    });
  }
}
