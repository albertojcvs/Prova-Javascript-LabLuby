import { getGame, getNameOfGameSelected } from "../../utils";

export function createNumberElement(value) {
  if (value < 10) value = "0" + value;

  const element = document.createElement("div");
  element.classList.add("number");
  element.innerText = value;
  element.onclick = () => {
    const gameName = getNameOfGameSelected();
    const gameData = getGame(gameName);
    if (
      document.getElementsByClassName("number-selected").length ===
      gameData["max-number"]
    ) {
      alert("Você já selecionou o máximo de números para o jogo!");
    } else {
      element.classList.toggle("number-selected");
    }
  };
  return element;
}
