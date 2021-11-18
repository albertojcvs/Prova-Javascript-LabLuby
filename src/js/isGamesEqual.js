export function isGamesEqual(game1,game2){
   let isEqual = true;
    if(game1.type !== game2.type){
        isEqual =  false
    }

    game1.numbers.forEach(number => {
        if(!(game2.numbers.includes(number))) isEqual =  false

    });

    return isEqual;
}