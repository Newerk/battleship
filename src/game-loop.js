import _ from "lodash";
import { Player } from "./player";


export const setupGame = () => {
    let player = Player();
    let cpu = Player();

    cpu.randomlyPlaceShips();
    

    return {
        player,
        cpu
    }
}

export const gameplayLoop = (currentGame) => {
    currentGame.cpu.randomAttack(currentGame.player);

    if (currentGame.cpu.gameBoard.allShipsSunk() === true || currentGame.player.gameBoard.allShipsSunk() === true) {
        alert('game over!');
    }
} 
