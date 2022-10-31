import ReactDOM from "react-dom/client";

import App from "./App.js";

export default class CreateReactApp {
  render({
    documentFrame,
  }: {
    documentFrame: Document;
  }) {
    console.log("\n🚀 Create React App started!\n");

    const app = documentFrame.createElement("div");
    app.id = "upa-ux-root";
    documentFrame.body.appendChild(app);

    const root = ReactDOM.createRoot(app);

    const Main = ({ documentFrame }: { documentFrame: Document }) => {
      return <App documentFrame={documentFrame} />;
    };
    root.render(<Main documentFrame={documentFrame} />);

    console.log("\n✅ Create React App render!\n");
  }
}
