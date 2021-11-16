export function deleteCartItem(item, price) {
  const totalCartElement = document.getElementById("cartTotal");

  totalCartElement.textContent = (
    Number(totalCartElement.textContent) - price
  ).toFixed(2);
  const cartItensContainer = document.getElementById("cartItensContainer");
  cartItensContainer.removeChild(item);
}
