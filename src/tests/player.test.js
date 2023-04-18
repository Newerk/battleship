import { Gameboard } from "../gameboard"
import { Player } from "../player"

let playerBoard = Gameboard();
let computerBoard = Gameboard();

let player = Player(computerBoard);
let computer = Player(playerBoard);

test('Player can attack enemy board', () => {
    computerBoard.placeShip(computerBoard.ships.destroyer, "A1", "Y")
    player.attack("A2");
    player.attack("A4");

    expect(computerBoard.hitAttacks).toEqual(["A2"])
    expect(computerBoard.missedAttacks).toEqual(["A4"])
})

test('CPU Randomly Places Ship on Board', () => {
    expect(computer.randomlyPlaceShips());
    expect(computer.totalSpotsToBeTaken()).toEqual(17);
    expect(computer.board).toEqual("")
})
