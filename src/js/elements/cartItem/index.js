import { deleteCartItem } from "../../deleteCartItem";

export function createCartItem(props) {
  const element = document.createElement("div");
  console.log(props);
  element.innerHTML = ` <div class="cart-item">
    <button><i class="far fa-trash-alt"></i></button>
    <div class="game-info game-info-${props.game}">
      <div class="game-info-numbers">
        <div>${props.numbers.join(", ")}</div>
      </div>
      <div>
        <span id="gameType" class="${props.game}">${props.name}</span>
        <span id="gamePrice" class="text-normal">R$ ${props.price.toFixed(
          2
        )}</span>
      </div>
    </div>
  </div>`;
  element.querySelector("button").onclick = function () {
    deleteCartItem(element,props.price);
  };
  return element;
}
