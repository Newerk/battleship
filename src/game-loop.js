import _ from "lodash";
import { Gameboard } from "./gameboard";
import { Player } from "./player";


export const setupGame = () => {
    let cpuGameboard = Gameboard();
    let playersGameBoard = Gameboard();

    let player = Player(cpuGameboard);
    let cpu = Player(playersGameBoard);

    cpu.randomlyPlaceShips();

    return {
        player,
        cpu
    }
}

export const gameplayLoop = (currentGame) => {
    if (currentGame.player.gameBoard.allShipsSunk() !== true || currentGame.cpu.gameBoard.allShipsSunk() !== true) {

    } else {
        //end game
    }

}
