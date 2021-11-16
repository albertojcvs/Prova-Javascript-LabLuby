import gamesData from '../data/games.json'

export function getGame(name){
    return gamesData.types.filter(game => game.type === name)[0];
}