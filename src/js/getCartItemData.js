export function getCartItemData(cartItem){
    const type  = cartItem.querySelector('span[id=gameType]').textContent;
    const numbers = cartItem.querySelector('.game-info-numbers div').textContent.split(', ');
    console.log(type,numbers);
    return {
        type,
        numbers
    }
}