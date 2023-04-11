import _ from "lodash";
import { Gameboard, buildBoard } from "../gameboard";
import { Ship } from "../ship";

let playersBoard = buildBoard();
let enemysBoard = buildBoard();


//Player's Gameboard
test('Place Ship on Board', () => {
    const testShip = Ship(3);

    //place ship on board vertically on coord D1
    Gameboard().placeShip(testShip, ["D", 1], "Y");

    expect(_.includes(Gameboard().occupiedCoords, [["D", 1], ["D", 2], ["D", 3]])).toBe(true);
})

test('Enemy Hits a ship', () => {
    const testShip = Ship(3);
    Gameboard().placeShip(testShip, ["D", 1], "Y");
    Gameboard().receiveAttack(["D", 3])
    
    expect(_.includes(Gameboard().occupiedCoords, [["D", 1], ["D", 2], ["D", 3]])).toBe(true);
})

test('Enemy Misses a ship', () => {
    expect(true).toBe(false);

})

test('All ships are sunken', () => {
    expect(Gameboard().allShipsSunk()).toBe(true);

})


//Gameboard Trackers
test('Missed attacks', () => {
    //returns array of recorded missed attacks
    expect(true).toBe(false);

})

test('Hit attacks', () => {
    //returns array of recorded hit attacks
    expect(true).toBe(false);

})


test('build board', () => {
    function testBoard() {
        let board = [];
        let letters = 'ABCDEFGHIJ';
        for (let i = 0; i < 10; i++) {
            for (let j = 1; j <= 10; j++) {
                board.push({
                    coord: [letters.charAt(i), j],
                    occupiedBy: 'water',
                    hit: false
                }
                );
            }
        }
        return board;
    }

    // expect(buildBoard()).toEqual(JSON.stringify(testBoard()))//test is only written like this so that I can see what the board array looks like. beautify code: https://beautifier.io/
    expect(buildBoard()).toEqual(testBoard())
})

