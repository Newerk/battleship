import _ from "lodash";
import { Player } from "./player";
import { cpuAttack } from "./cpu-logic";


export function setupGame() {
    let player = Player();
    let cpu = Player();

    cpu.randomlyPlaceShips();

    return {
        player,
        cpu
    }
}

export function gameplayLoop(currentGame) {
    cpuAttack(currentGame.cpu, currentGame.player);
} 
