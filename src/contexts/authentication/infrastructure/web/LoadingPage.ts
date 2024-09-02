export default class LoadingPage {
  start() {
    console.log("\n🌀 Loading Start");
    const body = this._createBodyElement();

    const frameset: any = document.getElementsByTagName("frameset")[0];
    frameset.style.display = "none";

    document.firstChild?.insertBefore(body, frameset);
  }

  _createBodyElement() {
    const body = document.createElement("body");

    body.id = "loading-root";
    body.innerHTML = "Cargando...";
    body.style.width = "100vw";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    body.style.display = "grid";
    body.style.placeContent = "center";
    body.style.color = "rgb(17 24 39 / 1)";
    body.style.fontWeight = "900";
    body.style.fontSize = "1.2rem";
    body.style.lineHeight = "2.1rem";

    return body;
  }

  stop() {
    const body = document.getElementById("loading-root");
    body?.remove();
  }
}
