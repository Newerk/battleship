import _ from "lodash";
import { Player } from "./player";
import { cpuAttack } from "./cpu-logic";


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
    cpuAttack(currentGame.cpu, currentGame.player);

} 
