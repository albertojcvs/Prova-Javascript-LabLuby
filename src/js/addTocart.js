import { clearGame } from "./clearGame";
import { createCartItem } from "./elements/cartItem";
import { getGame, getNameOfGameSelected } from "./utils";

function getGameType(type) {
  if (type === "Lotofácil") return "lotofacil";
  if (type === "Mega-Sena") return "mega";
  if (type === "Quina") return "quina";
}

export function addToCart() {
  const selectedNumbers = Array.from(
    document.getElementsByClassName("number-selected")
  ).map((element) => element.textContent);
  const gameSelected = getNameOfGameSelected();
  const gameData = getGame(gameSelected);
  if (selectedNumbers.length < gameData["max-number"]) {
    return alert(`Você deve selecionar ${gameData["max-number"]} números!`);
  } else if (selectedNumbers.length > gameData["max-number"]) {
    return alert(`Você deve selecionar apenas ${gameData["max-number"]} números
    `);
  }
  const newCartItem = createCartItem({
    game: getGameType(gameSelected),
    numbers: selectedNumbers,
    price: gameData.price,
    name: gameData.type,
  });

  const cartItensContainer = document.getElementById("cartItensContainer");
  cartItensContainer.append(newCartItem);

  const totalElement = document.getElementById("cartTotal");
  totalElement.textContent = Number(
    Number(totalElement.innerText) + Number(gameData.price)).toFixed(2);
  clearGame();
}
