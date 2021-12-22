/*global chrome*/
/* src/content.js */
import React from "react";
import ReactDOM from "react-dom";
import Frame, { FrameContextConsumer } from "react-frame-component";
import App from "./App";
const Main = ({docframe}) => {
  // render() {
    return (
      <Frame
        head={[
          <link
            type="text/css"
            rel="stylesheet"
            href={chrome.runtime.getURL("/static/css/content.css")}
          ></link>,
        ]}
      >
        <FrameContextConsumer>
          {({document, window}) => {
            return <App document={document} docframe={docframe} window={window} isExt={true} />;
          }}
        </FrameContextConsumer>
      </Frame>
    );
  // }
}

try {
  // window.onload = r;
  while (!r()) {
    console.log("r");
  }
} catch (e) {
  window.onload = r;
}

function r() {
  const doc = window.frames[1].document;
  // doc.style.display = "none";
  if(!doc) return false;
  const app = doc.createElement("div");
  app.id = "upa-ux-root";

  doc.body.appendChild(app);
  ReactDOM.render(<Main docframe={doc} />, app);

  // app.style.display = "none";

  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.message === "clicked_browser_action") {
      toggle();
    }
  });

  function toggle() {
    if (app.style.display === "none") {
      app.style.display = "block";
    } else {
      app.style.display = "none";
    }
  }

  return true;
}
