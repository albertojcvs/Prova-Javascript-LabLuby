import { deleteCartItem } from "../../deleteCartItem";

export function createCartItem(props) {
  const element = document.createElement("div");
  element.innerHTML = ` <div class="cart-item">
    <button><i class="far fa-trash-alt"></i></button>
    <div class="game-info" style="border-color:${props.color};" >
      <div class="game-info-numbers">
        <div>${props.numbers.join(", ")}</div>
      </div>
      <div>
        <span id="gameType"  >${props.type}</span>
        <span id="gamePrice" class="text-normal">R$ ${props.price.toLocaleString(
          undefined,
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }
        )}</span>
      </div>
    </div>
  </div>`;
  element.querySelector('div > span').style.color = props.color   ;
  element.querySelector("button").onclick = function () {
    deleteCartItem(element, props.price);
  };
  return element;
}
