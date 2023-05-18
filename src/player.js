import _ from "lodash";
import { Gameboard } from "./gameboard"


export const Player = () => {
    let personalBoard = Gameboard();

    function _totalSpotsToBeTaken() {
        return Object.values(personalBoard.ships).reduce((prev, { length }) => prev + length, 0)
    }

    function _randomCoordinate() {
        return "ABCDEFGHIJ"[Math.floor(10 * Math.random())] + Math.floor(Math.random() * (11 - 1) + 1);
    }

    function _randomAxis() {
        return "XY"[Math.floor(2 * Math.random())];
    }

    function _runPlaceShip(index) {
        return personalBoard.placeShip(personalBoard.ships[Object.keys(personalBoard.ships)[index]], _randomCoordinate(), _randomAxis());
    }

    return {
        attack(enemy, coord) {
            return enemy.gameBoard.receiveAttack(coord);
        },
        randomAttack(enemy) {
            const randomCoord = _randomCoordinate();
            if (_.includes(enemy.allAttackedLocationsPersonalBoard, randomCoord)) {
                console.log('repeat coord. running random attack again')
                return this.randomAttack(enemy);
            }
            return enemy.gameBoard.receiveAttack(randomCoord);
        },
        randomlyPlaceShips(start = 0) {
            while (personalBoard.shipOccupiedCoords.length < _totalSpotsToBeTaken()) {
                for (let i = start; i < Object.keys(personalBoard.ships).length; i++) {
                    const placeShip = _runPlaceShip(i);
                    if (placeShip === false) {
                        return this.randomlyPlaceShips(i);
                    }
                }
            }
        },
        gameBoard: personalBoard,
        board: personalBoard.board,
        occupiedCoords: personalBoard.shipOccupiedCoords,
        hitsOnPersonalBoard: personalBoard.hitAttacks,
        missesOnPersonalBoard: personalBoard.missedAttacks,
        allAttackedLocationsPersonalBoard: personalBoard.allAttacksMade,
    }
}

