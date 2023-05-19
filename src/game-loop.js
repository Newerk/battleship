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
    // console.log(`All CPU hips are sunk: ${currentGame.cpu.gameBoard.allShipsSunk()}`)
    // console.log(`All Player ships are sunk: ${currentGame.player.gameBoard.allShipsSunk()}`)
    currentGame.cpu.randomAttack(currentGame.player);

    if (currentGame.cpu.gameBoard.allShipsSunk() === true || currentGame.player.gameBoard.allShipsSunk() === true) {
        alert('game over!')//not appearting if the cpu loses first. Only shows after player loses to CPU
    }

}
