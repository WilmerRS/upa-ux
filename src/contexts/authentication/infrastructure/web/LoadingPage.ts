export default class LoadingPage {
  start() {
    console.log("\n🌀 Loading Start");
    const body = this._createBodyElement();

    // while (document.getElementsByTagName("frameset").length === 0) {}

    const frameset: any = document.getElementsByTagName("frameset")[0];
    frameset.style.display = "none";

    document.firstChild?.insertBefore(body, frameset);
  }

  _createBodyElement() {
    const body = document.createElement("body");
    body.id = "loading-root";
    body.innerHTML = "loading";
    body.style.width = "100vw";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    body.style.display = "grid";
    body.style.placeContent = "center";
    return body;
  }

  stop() {
    const body = document.getElementById("loading-root");
    body?.remove();
  }
}
