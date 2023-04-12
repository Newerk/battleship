import _ from "lodash";
import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

let playersBoard = Gameboard();
let enemysBoard = Gameboard();


//Player's Gameboard
test('Place Ship on Board', () => {
    const testShip = Ship(3);

    //place ship on board vertically on coord D1
    playersBoard.placeShip(testShip, "D1", "Y");
    
    expect(_.forEach(["D1", "D2", "D3"], (el) => (!_.includes(playersBoard.shipOccupiedCoords, el)) ? false : true)).toBeTruthy();
})

test('Enemy Hits a ship', () => {
    const game = Gameboard();
    const testShip = Ship(3);
    game.placeShip(testShip, "D1", "Y");
    game.receiveAttack("D3")

    expect(_.includes(game.hitAttacks, "D3")).toBeTruthy();
    expect(_.includes(game.missedAttacks, "D3")).toBeFalsy();
})

test('Enemy Misses a ship', () => {
    let game = Gameboard();

    const testShip = Ship(3);
    game.placeShip(testShip, "D1", "Y");
    game.receiveAttack("A2")

    expect(_.includes(game.missedAttacks, "D3")).toBeTruthy();
    expect(_.includes(game.hitAttacks, "D3")).toBeFalsy();
})

test('All ships are sunken', () => {
    let game = Gameboard();
    const testShip = Ship(3);
    game.placeShip(testShip, "D1", "Y");
    game.receiveAttack("D1")
    game.receiveAttack("D2")
    game.receiveAttack("D3")

    expect(testBoard.allShipsSunk()).toBeTruthy();

})


//Gameboard Trackers
test('Missed attacks', () => {
    //returns array of recorded missed attacks
    let game = Gameboard()
    const testShip = Ship(3);
    game.placeShip(testShip, "D1", "Y");
    game.receiveAttack("F7");
    game.receiveAttack("C10");
    game.receiveAttack("D2");
    game.receiveAttack("D3");

    expect(game.missedAttacks()).toEqual(["F7", "C10"]);

})

test('Hit attacks', () => {
    //returns array of recorded hit attacks
    let game = Gameboard()
    const testShip = Ship(3);
    game.placeShip(testShip, "D1", "Y");
    game.receiveAttack("D2");
    game.receiveAttack("D3");
    game.receiveAttack("F7");
    game.receiveAttack("C10")

    expect(game.hitAttacks()).toEqual(["D2", "D3"]);

})


test('build board', () => {
    let testBoard = Gameboard();
    // expect(Gameboard().board).toEqual(JSON.stringify(testBoard.board))//test is only written like this so that I can see what the board array looks like. beautify code: https://beautifier.io/
    expect(Gameboard().board).toEqual(testBoard.board)
})
