import _ from "lodash";
import { Gameboard } from "./gameboard";
import { Player } from "./player";


export const gameplayLoop = () => {
    let cpuGameboard = Gameboard();
    let playersGameBoard = Gameboard();

    let player = Player(cpuGameboard);
    let cpu = Player(playersGameBoard);

    cpu.randomlyPlaceShips();

    // while (player.gameBoard.allShipsSunk() !== true || cpu.gameBoard.allShipsSunk() !== true) {
    //     //player attacks a coord
    //     //cpu attacks a coord
    // }

    return {
        player,
        cpu
    }

}