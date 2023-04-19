import { Gameboard } from "./gameboard"

export const Player = (enemyBoard) => {
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
        attack(coord) {
            enemyBoard.receiveAttack(coord);
        },
        randomAttack() {
            enemyBoard.receiveAttack(_randomCoordinate())
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
        board: personalBoard.board,
        _totalSpotsToBeTaken, //this is private. will be removed later. only exposed for testing purposes
        occupiedCoords: personalBoard.shipOccupiedCoords,
    }
}

