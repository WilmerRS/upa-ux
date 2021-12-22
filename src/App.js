/*global chrome*/

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = ({ docframe, isExt }) => {
  // const doc = window.frames[1].document;
  const a = docframe.querySelector('[name="btnIngresar"]');
  a.value = "Loggin";
  console.log({ a });
  // console.log(window.frames[1].document.querySelector('[name="btnIngresar"]'));
  return (
    <div className="App">
      <header className="App-header">
        {isExt ? (
          <img
            src={chrome.runtime.getURL("static/media/logo.svg")}
            className="App-logo"
            alt="logo"
          />
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

export default App;
