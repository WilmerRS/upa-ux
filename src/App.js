/*global chrome*/
import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

const App = ({ docframe }) => {
  // const doc = window.frames[1].document;
  const search = () => {
    const itemsCount = 37;
    let dicc = [];
    for (let i = 0; i < itemsCount; i++) {
      const textInput = docframe.getElementsByClassName(
        "fondo_celda_5 text_letras"
      )[i].innerHTML;
      const numberImput = docframe.getElementsByClassName(
        "fondo_celda_3 text_num"
      )[i].innerHTML;
      dicc[textInput] = numberImput;
    }
    return dicc;
  };

  const decode = (password) => {
    var dicc = search();
    var passwordSplit = password.split("");
    var decodedPassword = [];
    for (var i = 0; i < passwordSplit.length; i++) {
      var nombre = passwordSplit[i].toUpperCase();
      decodedPassword[i] = dicc[nombre];
    }
    return decodedPassword.join("");
  };

  const parentLoginButton = docframe.querySelector('[name="btnIngresar"]');
  const parentUsernameInput = docframe.querySelector("#usuario");
  const parentPasswordInput = docframe.querySelector("#password");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    parentUsernameInput.value = data.username;
    parentPasswordInput.value = decode(data.password);
    parentLoginButton.click();
  };

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
