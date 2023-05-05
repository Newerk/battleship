import { Gameboard } from "./gameboard";
import { Player } from "./player";

export const gameplayLoop = () => {
    let cpuGameboard = Gameboard();
    let playersGameBoard = Gameboard();

    let player = Player(cpuGameboard);
    let cpu = Player(playersGameBoard);

    cpu.randomlyPlaceShips();

    console.log(cpuGameboard.shipOccupiedCoords)

    return {
        cpuGameboard,
        playersGameBoard,
        player,
        cpu
    }

}