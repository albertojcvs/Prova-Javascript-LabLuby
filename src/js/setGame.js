import gamesData from "../data/games.json";
import {createNumbersLineElement} from "./elements/numberLine";
import {createNumberElement} from "./elements/number";
export function setGame(game) {
  const numbersContainer = document.getElementById("numbersContainer");
  const gameData = gamesData.types[game];
  const gameNameElement = document.getElementById("gameName");
  const gameDescriptionElement = document.getElementById("gameDescription");
  

  gameNameElement.innerText = gameData.type.toUpperCase();
  gameDescriptionElement.innerText = gameData.description;
  numbersContainer.innerHTML = '';
  for(let i = '', line ; i < gameData.range;i++){
    if(i %10 == 0){
     if (line) numbersContainer.append(line);
      line = createNumbersLineElement();
      
    }
    const numberElement =  createNumberElement(String(i+1));
    line.append(numberElement);

  }
}


export function setMegaGame() {}

export function setLotomaniaGame() {}