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

    return {
        hits: [],
        misses: [],
        ships,
        occupiedCoords: [], //board-wide spots occupied by ships
        placeShip(selectedShip, coord, axis) {
            //updates Gameboard occupied coords with ship's location. Verifies that ship doesnt hang off the board, and that a spot is not already occupied
        },
        receiveAttack(coord) {
            if (_.includes(this.hits, coord) || _.includes(this.misses, coord)) {
                return;
            }
            if (/*attack hits*/'') {
                //get the ship on the coord and call its hit() function
                for (const key in this.ships) {
                    const shipType = this.ships[key];//specific ship [carrier, battleship, cruiser, submarine, destroyer]

                    if (_.includes(shipType.occupiedCoords, coord)) {
                        this.hits.push(coord);
                        shipType.hit();
                        shipType.isSunk();//might be uneeded***
                    }

                }
            } if (/*attack misses*/'') {
                this.misses.push(coord)
            }
        },
        allShipsSunk() {
            for (const key in this.ships) {
                const sunkenValue = this.ships[key].isSunk();
                if (sunkenValue === false) {
                    return false;
                }
            }
            return true;
        }
    }
}

export function buildBoard() {
    let board = [];
    let letters = 'ABCDEFGHIJ';
    for (let i = 0; i < 10; i++) {
        for (let j = 1; j <= 10; j++) {
            board.push({
                coord: [letters.charAt(i), j],
                occupiedBy: 'water', //values will be 'water' by default, but if a ship is on the coord, it will be changed to 'ship' or the name of specifc ship on the coord (still deciding)
                hit: false
            });
        }
    }
    return board;
}

