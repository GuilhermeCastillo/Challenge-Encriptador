function chaves(string, x, y) {
  let result = string.replaceAll(x, y);
  return result;
}

function copy_value() {
  const copyValue = document.getElementById("result");
  navigator.clipboard.writeText(copyValue.textContent);
}

function replicarTexto() {
  let textoInput = document.getElementById("text-input").value;

  document.getElementById("result").textContent = textoInput.toLowerCase();

  document.querySelector(".imagem-boneca").style.display = "none";
  document.querySelector(".h1-error").style.display = "none";

  let showText = document.querySelector("#showText");
  showText.classList.remove("title-error");
  showText.classList.add("title-success");
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

function descriptografar() {
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
document.querySelector("#copiar").addEventListener("click", copy_value);
