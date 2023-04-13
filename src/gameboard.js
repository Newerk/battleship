import _ from "lodash"
import { Ship } from "./ship";

export const Gameboard = () => {
    let board = {};
    let letters = 'ABCDEFGHIJ';

    for (let i = 0; i < 10; i++) {
        for (let j = 1; j <= 10; j++) {
            board[`${letters.charAt(i) + j}`] = {
                occupiedBy: 'water', //values will be 'water' by default, but if a ship is on the coord, it will be changed to 'ship' or the name of specifc ship on the coord (still deciding)
                hit: false
            }
        }
    }

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
            /*updates board occupidBy with coords of ship. Verifies that ship doesnt hang off the board(this can be done by checking if coord exists as a property in the board object or regex),
             and that a spot is not already occupied*/
            /*important: must consider which board is placing its ship*/

            if (axis === "Y") {
                let count = parseInt(coord[1]);

                for (let i = 0; i < selectedShip.length; i++) {
                    board[`${coord[0]}${count}`].occupiedBy = `${selectedShip}`;
                    _shipOccupiedCoords.push(`${coord[0]}${count}`);
                    count++;
                }
            }
            if (axis === "X") {
                //code here, expect the length if ship to go from left ro right:
                //ex: adding a 3 length ship to coord A1 horizontally will occupy spots A1,B1,C1
                let count = parseInt(letters.indexOf(coord[0]));

                for (let i = 0; i < selectedShip.length; i++) {
                    board[`${letters.charAt(count)}${coord[1]}`].occupiedBy = `${selectedShip}`;
                    _shipOccupiedCoords.push(`${letters.charAt(count)}${coord[1]}`);
                    count++;
                }

            }

        },
        receiveAttack(coord) {
            if (_.includes(_hits, coord) || _.includes(_misses, coord)) {
                return;
            }
            if (_.includes(_shipOccupiedCoords, coord) && !_.includes(_hits, coord) && !_.includes(_misses, coord)) {
                //get the ship on the coord and call its hit() function
                for (const key in ships) {
                    const shipType = ships[key];//specific ship [carrier, battleship, cruiser, submarine, destroyer]

                    if (_.includes(shipType.occupying, coord)) {
                        _hits.push(coord);
                        shipType.hit();
                        shipType.isSunk();//might be uneeded***
                    }

                }
            } if (!_.includes(_shipOccupiedCoords, coord) && !_.includes(_misses, coord) && !_.includes(_misses, coord)) {
                _misses.push(coord)
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
        get shipOccupiedCoords() {
            return _shipOccupiedCoords;
        },
        board,//use this to see current state of the board. May be removed from return object soon to keep this information private inside the factory function
    }
}

