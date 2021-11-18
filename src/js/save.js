import gamesData from "../data/games.json";
export function save() {
  const cartTotal = document.getElementById("cartTotal");
  if (
    Number(cartTotal.textContent.replace(",", ".")) >=
    gamesData["min-cart-value"]
  ) {
    alert("Sua compra foi realizada!");
    const cartItensContainer = document.getElementById("cartItensContainer");
    cartItensContainer.innerHTML =
      '  <div id="cartEmptyMessage" class="cart-empty text-normal" style="display:"block"">Your cart is empty</div>';
    cartTotal.textContent = "0,00";
  } else {
    alert(`Seu pedido deve ser no mínimo de R$ ${gamesData["min-cart-value"]}`);
  }
}
