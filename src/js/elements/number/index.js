import { getGame, getNameOfGameSelected } from "../../utils";

function convertHexToRGB(hexColor) {
  return `rgb(${parseInt(hexColor.substring(1, 3), 16)}, ${parseInt(
    hexColor.substring(3, 5),
    16
  )}, ${parseInt(hexColor.substring(5), 16)})`;
}

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
      const corAtual = element.style.getPropertyValue("background-color");
      element.style.setProperty(
        "background-color",
        corAtual === convertHexToRGB(gameData.color)
          ? "#ADC0C4"
          : gameData.color
      );
      console.log(element.getAttribute("numberSelected"));
      if (element.getAttribute("numberSelected") === null)
        element.setAttribute("numberSelected", "");
      else element.removeAttribute("numberSelected");
    }
  };
  return element;
}
