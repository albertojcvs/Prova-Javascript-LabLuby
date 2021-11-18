export function deleteCartItem(item, price) {
  const totalCartElement = document.getElementById("cartTotal");
  totalCartElement.textContent = parseFloat(
    parseFloat(totalCartElement.textContent.replace(',','.')) - parseFloat(price)
  ).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});
  if(totalCartElement.textContent == '0,00'){
    document.getElementById('cartEmptyMessage').style.display = 'block';
  }
  
  const cartItensContainer = document.getElementById("cartItensContainer");
  cartItensContainer.removeChild(item);
}
