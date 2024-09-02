import ReactDOM from "react-dom/client";

import App, { AppPages } from "./App";

export default class CreateReactApp {
  render({
    targetDocument,
    page,
    appId,
  }: {
    targetDocument: Document;
    page: AppPages;
    appId: string;
  }) {
    console.log(`🚀 [CreateReactApp][${appId}] Create React App started!`);

    const app = targetDocument.createElement("div");
    app.id = appId;
    targetDocument.body.appendChild(app);

    const root = ReactDOM.createRoot(app);

    const Main = ({
      documentFrame,
      page,
    }: {
      documentFrame: Document;
      page: AppPages;
    }) => {
      return <App documentFrame={documentFrame} page={page} />;
    };

    root.render(<Main documentFrame={targetDocument} page={page} />);

    console.log(`✅ [CreateReactApp][${appId}] Create React App render!`);
  }
}
