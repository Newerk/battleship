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
    if (currentGame.cpu.gameBoard.allShipsSunk() !== true || currentGame.player.gameBoard.allShipsSunk() !== true) {
        currentGame.cpu.randomAttack(currentGame.player);
    } else {
        alert('game over!')//not appearting if the cpu loses first. Only shows after player loses to CPU
    }

}
