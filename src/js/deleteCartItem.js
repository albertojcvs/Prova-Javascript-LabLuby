export function deleteCartItem(item){
    const cartItensContainer = document.getElementById('cartItensContainer');
    cartItensContainer.removeChild(item)
}