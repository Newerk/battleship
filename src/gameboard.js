import _ from "lodash"
import { Ship } from "./ship";

export const Gameboard = () => {
    let board = {};
    let letters = 'ABCDEFGHIJ';

    for (let i = 0; i < 10; i++) {
        for (let j = 1; j <= 10; j++) {
            board[`${letters.charAt(i) + j}`] = {
                occupiedBy: 'water',
                hit: false
            }
        }
    }

    const ships = {
        carrier: Ship("carrier", 5),
        battleship: Ship("battleship", 4),
        cruiser: Ship("cruiser", 3),
        submarine: Ship("submarine", 3),
        destroyer: Ship("destroyer", 2)
    }

    let _hits = [];
    let _misses = [];
    let _shipOccupiedCoords = [];

    return {
        placeShip(selectedShip, coord, axis) {
            if (axis === "Y") {
                let count = parseInt(coord[1]);

                for (let i = 0; i < selectedShip.length; i++) {
                    if (!this.board[`${coord[0]}${count}`]) {
                        throw new Error('Ships cannot extend past the board');
                        // break;
                        // return false;

                    }
                    if (_.includes(_shipOccupiedCoords, `${coord[0]}${count}`)) {
                        for (let j = i; j > 0; j--) {
                            board[`${coord[0]}${count}`].occupiedBy = 'water';
                            _shipOccupiedCoords.pop();
                            selectedShip.occupying.pop()
                            // count--;
                        }
                        throw new Error('Ships cannot overlap');
                    }

                    board[`${coord[0]}${count}`].occupiedBy = selectedShip.type;
                    _shipOccupiedCoords.push(`${coord[0]}${count}`);
                    selectedShip.occupying.push(`${coord[0]}${count}`)
                    count++;
                }
            }
            if (axis === "X") {
                let count = letters.indexOf(coord[0]);

                for (let i = 0; i < selectedShip.length; i++) {
                    if (!this.board[`${letters[count]}${coord[1]}`]) {
                        throw new Error('Ships cannot extend past the board');
                    }
                    if (_.includes(_shipOccupiedCoords, `${letters[count]}${coord[1]}`)) {
                        for (let j = i; j > 0; j--) {
                            board[`${letters[count]}${coord[1]}`].occupiedBy = 'water';
                            _shipOccupiedCoords.pop();
                            selectedShip.occupying.pop()
                            // count--;
                        }
                        throw new Error('Ships cannot overlap');
                    }

                    board[`${letters[count]}${coord[1]}`].occupiedBy = selectedShip.type;
                    _shipOccupiedCoords.push(`${letters[count]}${coord[1]}`);
                    selectedShip.occupying.push(`${letters[count]}${coord[1]}`)
                    count++;
                }

            }

            // return true;

        },
        receiveAttack(coord) {
            if (_.includes(_shipOccupiedCoords, coord) && !_.includes(_hits, coord) && !_.includes(_misses, coord)) {
                _hits.push(coord);

                for (const key in ships) {
                    const shipType = ships[key];

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
        board,
    }
}

