export default class DecodePasswordFromKeyTable {
  parentLoginButton: any;
  parentUsernameInput: any;
  parentPasswordInput: any;

  decode({
    username,
    rawPassword,
    documentFrame,
  }: {
    username: string;
    rawPassword: string;
    documentFrame: Document;
  }) {
    this.parentLoginButton = documentFrame.querySelector(
      '[name="btnIngresar"]'
    );
    this.parentUsernameInput = documentFrame.querySelector("#usuario");
    this.parentPasswordInput = documentFrame.querySelector("#password");

    this.parentUsernameInput.value = username;
    this.parentPasswordInput.value = this._decode({
      rawPassword,
      documentFrame,
    });
    this.parentLoginButton.click();
  }

  _search({ documentFrame }: { documentFrame: Document }) {
    const itemsCount = 37;
    let dict: { [key: string]: string } = {};
    for (let i = 0; i < itemsCount; i++) {
      const textInput = documentFrame.getElementsByClassName(
        "fondo_celda_5 text_letras"
      )[i].innerHTML;
      const numberInput = documentFrame.getElementsByClassName(
        "fondo_celda_3 text_num"
      )[i].innerHTML;
      dict[textInput] = numberInput;
    }
    return dict;
  }

  _decode({
    rawPassword,
    documentFrame,
  }: {
    rawPassword: string;
    documentFrame: Document;
  }) {
    var dict = this._search({ documentFrame });
    var passwordSplit = rawPassword.split("");
    var decodedPassword = [];
    for (var i = 0; i < passwordSplit.length; i++) {
      let key = passwordSplit[i].toUpperCase();
      decodedPassword[i] = dict[key];
    }
    return decodedPassword.join("");
  }
}
