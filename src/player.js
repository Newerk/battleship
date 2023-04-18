import { Gameboard } from "./gameboard"

export const Player = (enemyBoard) => {
    let personalBoard = Gameboard();

    function sumOfSpotsTaken() {//made the total amount of spots occupied a function instead of a hardcoded value just incase I want to use more or less ships in the game
        return Object.values(personalBoard.ships).reduce((prev, { length }) => prev + length, 0)
    }

    function randomCoordinate() {
        return "ABCDEFGHIJ"[Math.floor(10 * Math.random())] + Math.floor(Math.random() * (11 - 1) + 1);
    }

    function randomAxis() { //randomly return X or Y
        return "XY"[Math.floor(2 * Math.random())];
    }


    return {
        attack(coord) {
            enemyBoard.receiveAttack(coord);
        },
        randomlyPlaceShips() {//for the CPU to place ships in valid spots when called. select random coords(in a limited alphabetical and numerical range A-J,1-10) and X/Y axis
            while (enemyBoard.shipOccupiedCoords.length < sumOfSpotsTaken()) {
                for (let i = 0; i < Object.keys(enemyBoard.ships).length; i++) {
                    enemyBoard.placeShip(enemyBoard.ships[Object.keys(enemyBoard.ships)[i]], randomCoordinate(), randomAxis())
                }

            }
        },
        board: personalBoard.board,
        sumOfSpotsTaken,
    }
}

