import { getGame, getNameOfGameSelected } from "./utils";

export function completeGame() {
  const numbersSelected = Array.from(
    document.getElementsByClassName("number-selected")
  );
  const gameSelected = getNameOfGameSelected();
  const gameData = getGame(gameSelected);
  const missingNumbers = gameData["max-number"] - numbersSelected.length;
  for (let i = missingNumbers; i > 0; i--) {
    const numbersNotSelected = Array.from(
      document.querySelectorAll(".number:not(.number-selected)")
    );
    const randomNumber = Math.ceil(
      Math.random() * (numbersNotSelected.length - 1)
    );
    numbersNotSelected[randomNumber].classList.add("number-selected");
  }
}
