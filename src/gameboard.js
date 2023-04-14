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
                    if (!this.board[`${coord[0]}${count}`]) {//if board does not include this generated coord, you cannot place ship as the spot does not exist, or the ship will expand past the board once placed.
                        //also makes sure that none of the coords overlap with an already placed ship. verify that coord is not included in _shipOccupiedCord. If it does overlap, force the user to choose a different location. 
                        //I will have to erase what other coords were placed previously(so that there no unplaced coords stuck in _shipOccupiedCoords)
                        throw new Error('Ships cannot extend past the board');
                    }
                    if (_.includes(_shipOccupiedCoords, `${coord[0]}${count}`)) {
                        /*removes the coords that was push to _shipOccupiedCoords before the error was thrown. 
                        Instead of keeping to this appraoch, it would ideal to only place ships AFTER checking if a move is valid, 
                        instead of checking while its valid during play. this will rremove the need for this for loop. I can make a function instead that handles move validity
                        and returns true or false, which I can then use as conditionals for an if statement*/
                        for (let j = i; j > 0; j--) {
                            //find and remove from _shipOccupiedCoords
                            _.find(_shipOccupiedCoords, ``)

                        }
                        throw new Error('Ships cannot overlap');
                    }

                    board[`${coord[0]}${count}`].occupiedBy = `ship`;
                    _shipOccupiedCoords.push(`${coord[0]}${count}`);
                    selectedShip.occupying.push(`${coord[0]}${count}`)
                    count++;
                }
            }
            if (axis === "X") {
                let count = parseInt(letters.indexOf(coord[0]));

                for (let i = 0; i < selectedShip.length; i++) {
                    if (!this.board[`${letters.charAt(count)}${coord[1]}`]) {
                        throw new Error('Ships cannot extend past the board');
                    }
                    if (_.includes(_shipOccupiedCoords, `${letters.charAt(count)}${coord[1]}`)) {
                        for (let j = i; j > 0; j--) {
                            _.find(_shipOccupiedCoords, ``)

                        }
                        throw new Error('Ships cannot overlap');
                    }

                    board[`${letters.charAt(count)}${coord[1]}`].occupiedBy = `ship`;
                    _shipOccupiedCoords.push(`${letters.charAt(count)}${coord[1]}`);
                    selectedShip.occupying.push(`${letters.charAt(count)}${coord[1]}`)
                    count++;
                }

            }

        },
        receiveAttack(coord) {
            if (_.includes(_shipOccupiedCoords, coord) && !_.includes(_hits, coord) && !_.includes(_misses, coord)) {
                _hits.push(coord);

                //get the ship on the coord and call its hit() function
                for (const key in ships) {
                    const shipType = ships[key];//specific ship [carrier, battleship, cruiser, submarine, destroyer]

                    if (_.includes(shipType.occupying, coord)) {
                        shipType.hit();
                        shipType.isSunk();//might be uneeded***
                    }

                }

            }
            if (!_.includes(_shipOccupiedCoords, coord) && !_.includes(_misses, coord) && !_.includes(_hits, coord)) {
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
        get ships() {
            return ships;
        },
        board,//use this to see current state of the board. May be removed from return object soon to keep this information private inside the factory function
    }
}

