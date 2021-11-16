import gamesData from "../data/games.json";

export function getNameOfGameSelected() {
  const gameSelectedID = document.querySelector(
    "input[name=gameOption]:checked"
  ).id;
  return document.querySelector(`label[for=${gameSelectedID}]`).textContent;
}

export function getGame(name) {
  return gamesData.types.filter((game) => game.type === name)[0];
}
