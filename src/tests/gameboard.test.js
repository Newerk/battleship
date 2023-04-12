import _ from "lodash";
import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

let playersBoard = Gameboard();
let enemysBoard = Gameboard();


//Player's Gameboard
test('Place Ship on Board', () => {
    const testShip = Ship(3);

    //place ship on board vertically on coord D1
    Gameboard().placeShip(testShip, ["D1"], "Y");

    expect(_.includes(Gameboard().occupiedCoords, ["D1", "D2", "D3"])).toBe(true);
})

test('Enemy Hits a ship', () => {
    const game = Gameboard();
    const testShip = Ship(3);
    game.placeShip(testShip, "D1", "Y");
    game.receiveAttack("D3")

    expect(true).toBe(false);


})

test('Enemy Misses a ship', () => {
    const testShip = Ship(3);
    game.placeShip(testShip, "D1", "Y");
    game.receiveAttack("A2")

    expect(true).toBe(false);


})

test('All ships are sunken', () => {
    expect(Gameboard().allShipsSunk()).toBeTruthy();

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
    let testBoard = Gameboard();
    // expect(Gameboard().board).toEqual(JSON.stringify(testBoard.board))//test is only written like this so that I can see what the board array looks like. beautify code: https://beautifier.io/
    expect(Gameboard().board).toEqual(testBoard.board)
})
