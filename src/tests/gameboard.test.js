import { Gameboard, _buildBoard } from "../gameboard";


//Player's Gameboard
test('Place Ship on Board', () => {
    expect(true).toBe(false);
})

test('Ships do not overlap', () => {//delete once code implements ships not overlapping
    expect(true).toBe(false);

})

test('Enemy Hits a ship', () => {
    expect(true).toBe(false);

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

    expect(_buildBoard()).toEqual(JSON.stringify(testBoard()))//test is only written like this so that I can see what the board array looks like. beautify code: https://beautifier.io/
})

