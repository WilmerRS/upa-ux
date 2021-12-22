/*global chrome*/

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useForm } from "react-hook-form";

const App = ({ docframe, isExt }) => {
  // const doc = window.frames[1].document;
  const a = docframe.querySelector('[name="btnIngresar"]');
  a.value = "Loggin";
  console.log({ a });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  // console.log(window.frames[1].document.querySelector('[name="btnIngresar"]'));
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" {...register("username")} />
        <input name="password" {...register("password")} />
        <input type="submit" value="Send form" />
      </form>
    </div>
  );
};

export default App;
