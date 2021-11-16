import { getGame } from "./utils";

export function completeGame() {
  const numbersSelected = Array.from(
    document.getElementsByClassName("number-selected")
  );
  const gameSelectedID = document.querySelector(
    "input[name=gameOption]:checked"
  ).id;
  const gameSelected = document.querySelector(
    `label[for=${gameSelectedID}]`
  ).textContent;
  const gameData = getGame(gameSelected);
  const missingNumbers = gameData["max-number"] - numbersSelected.length;
  console.log(missingNumbers);
  for (let i = missingNumbers; i > 0; i--) {
    const numbersNotSelected = Array.from(
      document.querySelectorAll(".number:not(.number-selected)")
    );
    console.log(numbersNotSelected);
    const randomNumber = Math.ceil(Math.random() * (numbersNotSelected.length-1));
    console.log(randomNumber);
    numbersNotSelected[randomNumber].classList.add("number-selected");
  }
}
