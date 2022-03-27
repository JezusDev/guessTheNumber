"use strict";
const start = document.querySelector(".game__start");
start.addEventListener("click", () => {
  let game = startGame(1, 100);
  document.querySelector(".result").classList.remove("hide");
  start.innerHTML = "Начать заново";
  document.querySelector("#random-number").value = "";

  document.querySelector(".result").addEventListener("click", () => {
    game();
  });
});

function startGame(min, max) {
  let count = 0;

  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber);

  return function () {
    let out = document.querySelector(".game__out");
    let value = +document.querySelector("#random-number").value;
    console.log(value);

    if (!value) {
      popupMessage("Вы ввели не число, исправьтесь", "win");
    } else {
      if (value < randomNumber) {
        popupMessage("Ваше число меньше загаданного", "win");
        ++count;
      } else if (value === randomNumber) {
        ++count;
        popupMessage("Победа!", "win");
        return true;
      } else {
        popupMessage("Выше число больше загаданного", "win");
        ++count;
      }
    }
  };
}

function popupMessage(message, status) {
  let chips = document.createElement("div");
  chips.classList.add("message", status);
  chips.innerHTML = message;
  document.querySelector(".popup").appendChild(chips);
  setTimeout(function () {
    deletePopup(chips);
  }, 3000);
}

function deletePopup(chips) {
  chips.classList.add("hide");
  setTimeout(function () {
    chips.remove();
  }, 500);
}
