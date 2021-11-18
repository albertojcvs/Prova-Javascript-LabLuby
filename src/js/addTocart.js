import { clearGame } from "./clearGame";
import { createCartItem } from "./elements/cartItem";
import { getCartItemData } from "./getCartItemData";
import { isGamesEqual } from "./isGamesEqual";
import { getGame, getNameOfGameSelected } from "./utils";

function getGameType(type) {
  if (type === "Lotofácil") return "lotofacil";
  if (type === "Mega-Sena") return "mega";
  if (type === "Quina") return "quina";
}

export function addToCart() {
  const cartItens = Array.from(document.getElementsByClassName("cart-item"));

  const selectedNumbers = Array.from(
    document.querySelectorAll(".number[numberSelected]")
  ).map((element) => element.textContent);
    
  console.log(selectedNumbers);
  const gameSelected = getNameOfGameSelected();
  const gameData = getGame(gameSelected);
  
  if (selectedNumbers.length < gameData["max-number"]) {
    return alert(`Você deve selecionar mais ${gameData["max-number"] - selectedNumbers.length} ${ gameData["max-number"] - selectedNumbers.length > 1 ? 'números':'número'}!`);
  } 
  
  const newGameData = {
    game: getGameType(gameSelected),
    numbers: selectedNumbers,
    price: gameData.price,
    type: gameData.type,
  };

  let isGameAlreadyAdded = false;
  cartItens.forEach((cartItem) => {
    if (isGamesEqual(newGameData, getCartItemData(cartItem))) {
      isGameAlreadyAdded = true;
      return;
    }
  });

  if (isGameAlreadyAdded) {
    clearGame();
    return alert("Você já adicionou essa aposta!");
  }
  
  const newCartItem = createCartItem(newGameData);

  const cartemptyMessage = document.getElementById("cartEmptyMessage");
  cartemptyMessage.style.display = "none";

  const cartItensContainer = document.getElementById("cartItensContainer");
  cartItensContainer.append(newCartItem);

  const totalElement = document.getElementById("cartTotal");
  totalElement.textContent = Number(
    parseFloat(totalElement.textContent.replace(",", ".")) +
      parseFloat(gameData.price)
  ).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  clearGame();
}
