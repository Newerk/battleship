import { cpuAttack } from "../cpu-logic";
import { Player } from "../player";


let player = Player();
let cpu = Player();

// test("CPU randomly Attacks Non-Same Locations Until All 100 Coords are hit", () => {
//     for (let i = 0; i < 100; i++) {
//         cpuAttack(player);

//     }
//     expect(cpu.allAttackedLocationsPersonalBoard.length).toBe(100)

//     //checks if every coord on the board is hit
//     let arr = cpu.allAttackedLocationsPersonalBoard;
//     let setValidator = new Set(arr);
//     expect(arr.length === setValidator.size).toBeTruthy();
// })





