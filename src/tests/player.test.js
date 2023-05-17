import { Gameboard } from "../gameboard"
import { Player } from "../player"

let player = Player();
let computer = Player();

test('Player can attack enemy board', () => {
    computer.gameBoard.placeShip(computer.gameBoard.ships.destroyer, "A1", "Y")
    player.attack(computer.gameBoard, "A2");
    player.attack(computer.gameBoard, "A4");

    expect(computer.hitsOnPersonalBoard).toEqual(["A2"])
    expect(computer.missesOnPersonalBoard).toEqual(["A4"])
})

// test('CPU Randomly Places Ship on Board', () => {
//     computer.randomlyPlaceShips()
//     expect(computer.occupiedCoords.length).toEqual(computer._totalSpotsToBeTaken())
//     // expect(computer.board.shipOccupiedCoords.length).toEqual(computer._totalSpotsToBeTaken())

//     // expect(computer.board).toEqual("")
// })


