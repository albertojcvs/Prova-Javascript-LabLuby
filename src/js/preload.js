import { addToCart } from "./addTocart";
import { clearGame } from "./clearGame";
import { completeGame } from "./completeGame";
import { save } from "./save";
import { setGame } from "./setGame";
import { getGame, getNameOfGameSelected } from "./utils";

export default function preload() {
  const lotofacilOption = document.getElementById("lotofacilOption");
  const megaOption = document.getElementById("megaOption");
  const quinaOption = document.getElementById("quinaOption");

  lotofacilOption.onclick = () => setGame("Lotofácil");
  megaOption.onclick = () => setGame("Mega-Sena");
  quinaOption.onclick = () => setGame("Quina");

  setGame("Lotofácil");

  const clearGameButton = document.getElementById("clearGameButton");
  clearGameButton.onclick = clearGame;

  const completeGameButton = document.getElementById("completeGameButton");
  completeGameButton.onclick = completeGame;

  const addToCarButton = document.getElementById("addToCartButton");
  addToCarButton.onclick = addToCart;

  const saveButton = document.getElementById('saveButton');
  saveButton.onclick = save;
}
