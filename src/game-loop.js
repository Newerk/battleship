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

export const gameplayLoop = () => {
    document.querySelector('#subtitles-box').textContent = "gameplayLoop() Called";

    // while (player.gameBoard.allShipsSunk() !== true || cpu.gameBoard.allShipsSunk() !== true) {
    //     //player attacks a coord
    //     //cpu attacks a coord
    // }
    // console.log(player.gameBoard.ships)

}
