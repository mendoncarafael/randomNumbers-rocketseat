let inputMin = document.getElementById("input-min");
let inputMax = document.getElementById("input-max");
let qtdNumbers = document.getElementById("qtd-numbers");
let sortear = document.getElementById("sorter");

function numbersQtd() {
  if (qtdNumbers.value >= 1) {
    if (parseInt(inputMin.value) < parseInt(inputMax.value)) {
      for (let i = 0; i < qtdNumbers.value; i++) {
        const randomNumber =
          Math.floor(
            Math.random() *
              (parseInt(inputMax.value) - parseInt(inputMin.value) + 1),
          ) + parseInt(inputMin.value);
        const result = document.getElementById("result");
        result.innerHTML += `<div class="number-box"><h2>${randomNumber}</h2></div>`;
      }
    } else if (parseInt(inputMin.value) > parseInt(inputMax.value)) {
      window.alert("O valor máximo deve ser maior que o valor mínimo");
    } else {
      window.alert("Digite um número válido");
    }
  } else {
    window.alert("Digite uma quantidade de números válida");
  }
}

sortear.addEventListener("click", function () {
  document.getElementById("result").innerHTML = "";
  numbersQtd();
});
