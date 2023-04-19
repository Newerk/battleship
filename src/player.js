import { Gameboard } from "./gameboard"

export const Player = (enemyBoard) => {
    let personalBoard = Gameboard();

    function _totalSpotsToBeTaken() {//made the total amount of spots occupied a function instead of a hardcoded value just incase I want to use more or less ships in the game
        return Object.values(personalBoard.ships).reduce((prev, { length }) => prev + length, 0)
    }

    function _randomCoordinate() {
        return "ABCDEFGHIJ"[Math.floor(10 * Math.random())] + Math.floor(Math.random() * (11 - 1) + 1);
    }

    function _randomAxis() { //randomly return X or Y
        return "XY"[Math.floor(2 * Math.random())];
    }

    function _runPlaceShip(index) {
        return personalBoard.placeShip(personalBoard.ships[Object.keys(personalBoard.ships)[index]], _randomCoordinate(), _randomAxis());
    }


    return {
        attack(coord) {
            enemyBoard.receiveAttack(coord);
        },
        randomlyPlaceShips(start = 0) {//for the CPU to place ships in valid spots when called. select random coords(in a limited alphabetical and numerical range A-J,1-10) and X/Y axis
            while (personalBoard.shipOccupiedCoords.length < _totalSpotsToBeTaken()) {//need to figure out how to rerun the placeship if an error is thrown until all the ships have been placed instead of terminating the function
                for (let i = start; i < Object.keys(personalBoard.ships).length; i++) {
                    const placeShip = _runPlaceShip(i);
                    if (placeShip !== true) {
                        return this.randomlyPlaceShips(i);
                    }
                }

            }
        },
        board: personalBoard.board,
        _totalSpotsToBeTaken,
        occupiedCoords: personalBoard.shipOccupiedCoords,
    }
}

