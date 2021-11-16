import { clearGame } from "./clearGame";
import { completeGame } from "./completeGame";
import { setGame } from "./setGame";

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
}
