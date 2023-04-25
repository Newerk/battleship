import { cpuAttack } from "../cpu-logic";
import { Gameboard } from "../gameboard";
import { Player } from "../player";

let cpuGameboard = Gameboard();
let playersGameBoard = Gameboard();

let player = Player(cpuGameboard);
let cpu = Player(playersGameBoard);

test("CPU randomly Attacks Non-Same Locations", () => {
    cpuAttack(player);
    cpuAttack(player);
    cpuAttack(player);
    cpuAttack(player);
    cpuAttack(player);
    cpuAttack(player);
    cpuAttack(player);
    cpuAttack(player);
    cpuAttack(player);
    cpuAttack(player);
    // console.log(cpuGameboard.allAttacksMade);
    expect(cpuGameboard.allAttacksMade.length).toBe(10)
    
})


