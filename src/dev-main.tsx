import React from "react";
import ReactDOM from "react-dom/client";
import App from "./contexts/authentication/presentation/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App documentFrame={document} page="login" />
  </React.StrictMode>
);
