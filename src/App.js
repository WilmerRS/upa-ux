/*global chrome*/

import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

const App = ({ docframe, isExt }) => {
  // const doc = window.frames[1].document;
  const parentLoginButton = docframe.querySelector('[name="btnIngresar"]');
  const parentUsernameInput = docframe.querySelector("#usuario")
  const parentPasswordInput = docframe.querySelector("#password")
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    parentUsernameInput.value = data.username;
    parentPasswordInput.value = data.password;
  };
  // console.log(window.frames[1].document.querySelector('[name="btnIngresar"]'));
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" {...register("username")} />
        <input type="password" name="password" {...register("password")} />
        <input type="submit" value="Send form" />
      </form>
    </div>
  );
};

export default App;
