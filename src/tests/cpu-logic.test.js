import { cpuAttack } from "../cpu-logic";
import { Gameboard } from "../gameboard";
import { Player } from "../player";

let cpuGameboard = Gameboard();
let playersGameBoard = Gameboard();

let player = Player(cpuGameboard);
let cpu = Player(playersGameBoard);

test("CPU randomly Attacks Non-Same Locations Until All 100 Coords are hit", () => {
    for (let i = 0; i < 100; i++) {
        cpuAttack(player);

    }
    expect(cpuGameboard.allAttacksMade.length).toBe(100)

    //checks if every coord on the board is hit
    let arr = cpuGameboard.allAttacksMade;
    let setChecker = new Set(arr);
    expect(arr.length === setChecker.size).toBeTruthy();
})


