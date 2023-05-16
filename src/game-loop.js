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
    document.querySelector('#subtitles-box').textContent = "Make your first attack";
    document.querySelector('#freq-coord').innerHTML = "";


    // while (currentGame.player.gameBoard.allShipsSunk() !== true || currentGame.cpu.gameBoard.allShipsSunk() !== true) {
    //     //player attacks a coord
    //     //cpu attacks a coord
    // }
    // console.log(player.gameBoard.ships)

}
