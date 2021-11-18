import { getGame, getNameOfGameSelected } from "./utils";

export function completeGame() {
  const numbersSelected = Array.from(
    document.querySelectorAll(".number[numberSelected]")
  );
  const gameSelected = getNameOfGameSelected();
  const gameData = getGame(gameSelected);

  const missingNumbers = gameData["max-number"] - numbersSelected.length;

  for (let i = missingNumbers; i > 0; i--) {
    const numbersNotSelected = Array.from(
      document.querySelectorAll(".number:not([numberSelected])")
    );
    const randomNumber = Math.ceil(
      Math.random() * (numbersNotSelected.length - 1)
    );
    numbersNotSelected[randomNumber].style.backgroundColor = gameData.color;
    numbersNotSelected[randomNumber].setAttribute('numberSelected','');
  }
}
