import _ from "lodash"
import { Ship } from "./ship";

export const Gameboard = () => {
    let board = {};
    let letters = 'ABCDEFGHIJ';

    const buildBoard = (() => {
        for (let i = 0; i < 10; i++) {
            for (let j = 1; j <= 10; j++) {
                board[`${letters.charAt(i) + j}`] = {
                    occupiedBy: 'water', //values will be 'water' by default, but if a ship is on the coord, it will be changed to 'ship' or the name of specifc ship on the coord (still deciding)
                    hit: false
                }
            }
        }
        return board;

    })();

    const ships = {
        carrier: Ship(5),
        battleship: Ship(4),
        cruiser: Ship(3),
        submarine: Ship(3),
        destroyer: Ship(2)
    }

    let _hits = [];
    let _misses = [];
    let _shipOccupiedCoords = [];

    return {
        placeShip(selectedShip, coord, axis) {
            /*updates board occupidBy with coords of ship. Verifies that ship doesnt hang off the board(this can be done by checking if coord exists as a property in the board object),
             and that a spot is not already occupied*/
            /*important: must consider which board is placing its ship*/

        },
        receiveAttack(coord) {
            if (_.includes(_hits, coord) || _.includes(_misses, coord)) {
                return;
            }
            if (/*attack hits*/'') {
                //get the ship on the coord and call its hit() function
                for (const key in ships) {
                    const shipType = ships[key];//specific ship [carrier, battleship, cruiser, submarine, destroyer]

                    if (_.includes(shipType.occupying, coord)) {
                        _hits.push(coord);
                        shipType.hit();
                        shipType.isSunk();//might be uneeded***
                    }

                }
            } if (/*attack misses*/'') {
                misses.push(coord)
            }
        },
        allShipsSunk() {
            for (const key in ships) {
                const sunkenValue = ships[key].isSunk();
                if (sunkenValue === false) {
                    return false;
                }
            }
            return true;
        },
        get missedAttacks() {
            return _misses;
        },
        get hitAttacks() {
            return _hits;
        },
        get shipOccupiedCoords(){
            return _shipOccupiedCoords;
        },
        board,//use this to see current state of the board. May be removed from return object soon to keep this information private inside the factory function
    }
}

