import { createNumbersLineElement } from "./elements/numberLine";
import { createNumberElement } from "./elements/number";
import { getGame } from "./utils";
export function setGame(gameName) {
  const numbersContainer = document.getElementById("numbersContainer");
  const gameData = getGame(gameName);
  const gameNameElement = document.getElementById("gameName");
  const gameDescriptionElement = document.getElementById("gameDescription");

  gameNameElement.innerText = gameData.type.toUpperCase();
  gameDescriptionElement.innerText = gameData.description;
  numbersContainer.innerHTML = "";
  const numbersPerLine = 10;
  for (
    let i = "",line, contador = 10;
    i <= gameData.range;
    i++, contador++
  ) {
    if (contador === numbersPerLine || i == gameData.range) {
      contador = 0;
      if (line) numbersContainer.append(line);
      line = createNumbersLineElement();
    }
    const numberElement = createNumberElement(String(i + 1));
    line.append(numberElement);
  }
  
}
