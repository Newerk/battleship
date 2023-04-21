import { cpuAttack } from "../cpu-logic";
import { Gameboard } from "../gameboard";
import { Player } from "../player";

let enemyGameboard = Gameboard();
let playersGameBoard = Gameboard();

let player = Player(enemyGameboard);
let cpu = Player(playersGameBoard);

test("Show Next Possible Moves", () => {
    // player.attack("B4");
    // player.attack("C4")
    cpuAttack(player);
    cpuAttack(player);
    cpuAttack(player);
    cpuAttack(player);
    cpuAttack(player);
    expect(cpuAttack(player)).toBe("")
})


