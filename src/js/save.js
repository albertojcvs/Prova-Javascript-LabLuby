import gamesData from '../data/games.json'
export function save(){
    const cartTotal = document.getElementById('cartTotal')
    if(Number(cartTotal.textContent) >= gamesData['min-cart-value']){
        alert("Sua compra foi realizada!");
        const cartItensContainer = document.getElementById('cartItensContainer');
        cartItensContainer.innerHTML = '';
        cartTotal.textContent = '0.00'

    }else{
        alert(`Seu pedido deve ser no mínimo de R$ ${gamesData['min-cart-value']}`);
    }
    

}