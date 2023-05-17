import _ from "lodash";
import { Gameboard } from "./gameboard";
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
    if (currentGame.player.gameBoard.allShipsSunk() !== true || currentGame.cpu.gameBoard.allShipsSunk() !== true) {
        currentGame.cpu.randomAttack(currentGame.player);
    } else {
        alert('game over!')
    }

}
