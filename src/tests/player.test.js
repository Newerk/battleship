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
    expect(player.sumOfSpotsTaken()).toEqual(17)

})
