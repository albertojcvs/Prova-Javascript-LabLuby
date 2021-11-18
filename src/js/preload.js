import { addToCart } from "./addTocart";
import { clearGame } from "./clearGame";
import { completeGame } from "./completeGame";
import { save } from "./save";
import { setGame } from "./setGame";
import gamesData from "../data/games.json";
import { createGameLink } from "./elements/gameLink";
export default function preload() {
  const gamesLinks = document.getElementById("gamesLinks");
  gamesData.types.forEach((game,index) => {
    const gameLink = createGameLink({ name: game.type, color: game.color },index === 0 ? true:false);
    
     gameLink.onclick = () => setGame(game.type);
  
    gamesLinks.append(gameLink);
  });

  setGame(gamesData.types[0].type);

  const clearGameButton = document.getElementById("clearGameButton");
  clearGameButton.onclick = clearGame;

  const completeGameButton = document.getElementById("completeGameButton");
  completeGameButton.onclick = completeGame;

  const addToCarButton = document.getElementById("addToCartButton");
  addToCarButton.onclick = addToCart;

  const saveButton = document.getElementById("saveButton");
  saveButton.onclick = save;
}
