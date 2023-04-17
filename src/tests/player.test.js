import { Gameboard } from "../gameboard"
import { Player } from "../player"

let playerBoard = Gameboard();
let computerBoard = Gameboard();

let player = Player();
let computer = Player();

test('CPU Randomly Places Ships at Valid Locations', () => {
    //code here
    expect(computerBoard.shipOccupiedCoords.length).toEqual(17)
})

test('Player can attack enemy board', () => {
    expect()
})
test('', () => {
    expect()
})
test('', () => {
    expect()
})