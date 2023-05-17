import { cpuAttack } from "../cpu-logic";
import { Gameboard } from "../gameboard";
import { Player } from "../player";


let player = Player();
let cpu = Player();

// test("CPU randomly Attacks Non-Same Locations Until All 100 Coords are hit", () => {
//     for (let i = 0; i < 100; i++) {
//         cpuAttack(player);

//     }
//     expect(cpuGameboard.allAttacksMade.length).toBe(100)

//     //checks if every coord on the board is hit
//     let arr = cpuGameboard.allAttacksMade;
//     let setValidator = new Set(arr);
//     expect(arr.length === setValidator.size).toBeTruthy();
// })

test("Random Valid Attack From CPU", ()=> {
    cpu.randomAttack(player.gameBoard);
    
    expect(player.allAttackedLocationsPersonalBoard.length).toBe(1);
})



