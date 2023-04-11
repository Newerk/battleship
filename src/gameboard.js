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
        placeShip(selectedShip, coord, axis) { },
        receiveAttack(coord) {
            if (_.includes(this.hits, coord) || _.includes(this.misses, coord)) {
                return;
            }
            if (/*attack hits*/'') {
                //get the ship on the coord and call its hit() function
                this.hits.push(coord)
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