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
    let _allAttacksMade = [];
    let _shipOccupiedCoords = [];

    return {
        placeShip(selectedShip, coord, axis) {
            if (axis === "Y") {
                let count = parseInt(coord.slice(1));


                for (let i = 0; i < selectedShip.length; i++) {

                    if (!this.board[`${coord[0]}${count}`]) {
                        for (let j = i; j > 0; j--) {
                            _shipOccupiedCoords.pop();
                            selectedShip.occupying.pop()
                        }
                        return false;
                    }

                    if (_.includes(_shipOccupiedCoords, `${coord[0]}${count}`)) {
                        for (let j = i; j > 0; j--) {
                            this.board[`${coord[0]}${count}`].occupiedBy = 'water';
                            _shipOccupiedCoords.pop();
                            selectedShip.occupying.pop()
                        }
                        return false;
                    }

                    this.board[`${coord[0]}${count}`].occupiedBy = selectedShip.type;
                    this.board[`${coord[0]}${count}`].hit = true;
                    _shipOccupiedCoords.push(`${coord[0]}${count}`);
                    selectedShip.occupying.push(`${coord[0]}${count}`);
                    count++;

                }
            }
            if (axis === "X") {
                let count = letters.indexOf(coord[0]);
                let digits = parseInt(coord.slice(1));

                for (let i = 0; i < selectedShip.length; i++) {

                    if (!this.board[`${letters[count]}${digits}`]) {
                        for (let j = i; j > 0; j--) {
                            _shipOccupiedCoords.pop();
                            selectedShip.occupying.pop()
                        }
                        return false;
                    }

                    if (_.includes(_shipOccupiedCoords, `${letters[count]}${digits}`)) {
                        for (let j = i; j > 0; j--) {
                            this.board[`${letters[count]}${digits}`].occupiedBy = 'water';
                            _shipOccupiedCoords.pop();
                            selectedShip.occupying.pop()
                        }
                        return false;
                    }

                    this.board[`${letters[count]}${digits}`].occupiedBy = selectedShip.type;
                    this.board[`${letters[count]}${digits}`].hit = true;
                    _shipOccupiedCoords.push(`${letters[count]}${digits}`);
                    selectedShip.occupying.push(`${letters[count]}${digits}`)
                    count++;

                }

            }

            return true;

        },
        receiveAttack(coord) {
            if (_.includes(_shipOccupiedCoords, coord) && !_.includes(_allAttacksMade, coord)) {
                _hits.push(coord);
                _allAttacksMade.push(coord);
                for (const key in ships) {
                    const shipType = ships[key];

                    if (_.includes(shipType.occupying, coord)) {
                        shipType.hit();

                    }
                }
                return true;

            }
            if (!_.includes(_shipOccupiedCoords, coord) && !_.includes(_allAttacksMade, coord)) {
                _misses.push(coord);
                _allAttacksMade.push(coord);

                return true;
            } else {

                return false;
            }


        },
        allShipsSunk() {
            let sunkStatuses = [];

            for (const key in ships) {
                const sunkenValue = ships[key].isSunk();
                if (sunkenValue === true) {
                    sunkStatuses.push(sunkenValue);
                }
            }
            if (sunkStatuses.length === Object.keys(ships).length) {
                return true;

            } else {
                return false;
            }
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
        get allAttacksMade() {
            return _allAttacksMade;
        },
        board,
    }
}

