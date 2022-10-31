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

    onLoad({
      document,
      documentFrame,
      window,
    });
  }
}
