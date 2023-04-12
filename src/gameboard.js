import _ from "lodash"
import { Ship } from "./ship";

export const Gameboard = () => {
    const ships = {
        carrier: Ship(5),
        battleship: Ship(4),
        cruiser: Ship(3),
        submarine: Ship(3),
        destroyer: Ship(2)
    }

    let hits = [];
    let misses = [];

    return {
        placeShip(selectedShip, coord, axis) {
            //updates board occupidBy with coords of ship. Verifies that ship doesnt hang off the board, and that a spot is not already occupied
            /*ex: let enemyBoard = buildBoard()
            */
        },
        receiveAttack(coord) {
            if (_.includes(hits, coord) || _.includes(misses, coord)) {
                return;
            }
            if (/*attack hits*/'') {
                //get the ship on the coord and call its hit() function
                for (const key in ships) {
                    const shipType = ships[key];//specific ship [carrier, battleship, cruiser, submarine, destroyer]

                    if (_.includes(shipType.occupying, coord)) {
                        hits.push(coord);
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
        }
    }
}

export function buildBoard() {
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
    return board;

}
