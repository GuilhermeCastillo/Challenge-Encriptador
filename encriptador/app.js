function chaves(string, x, y) {
  let result = string.replaceAll(x, y);
  return result;
}

function criptografar() {
  const inputUser = document.getElementById("text-input");
  const paragraph = document.getElementById("result");

  let inputValue = inputUser.value;

  inputValue = chaves(inputValue, "e", "enter");
  inputValue = chaves(inputValue, "i", "imes");
  inputValue = chaves(inputValue, "a", "ai");
  inputValue = chaves(inputValue, "o", "ober");
  inputValue = chaves(inputValue, "u", "ufat");

  if (inputValue.length === 0) {
    paragraph.innerText =
      "Digite um texto que você deseja criptografar ou descriptografar.";
  } else {
    paragraph.innerText = `${inputValue}`;
  }
}

function descriptografar(msg) {
  const inputUser = document.getElementById("text-input");
  const paragraph = document.getElementById("result");

  let inputValue = inputUser.value;

  inputValue = chaves(inputValue, "enter", "e");
  inputValue = chaves(inputValue, "imes", "i");
  inputValue = chaves(inputValue, "ai", "a");
  inputValue = chaves(inputValue, "ober", "o");
  inputValue = chaves(inputValue, "ufat", "u");

  if (inputValue.length === 0) {
    paragraph.innerText =
      "Digite um texto que você deseja criptografar ou descriptografar.";
  } else {
    paragraph.innerText = `${inputValue}`;
  }
}

document.querySelector("#criptografar").addEventListener("click", criptografar);
document
  .querySelector("#descriptografar")
  .addEventListener("click", descriptografar);
