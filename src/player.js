import { Gameboard } from "./gameboard"

export const Player = (enemyBoard) => {
    let personalBoard = Gameboard();

    function sumOfSpotsTaken() {//made the total amount of spots occupied a function instead of a hardcoded value just incase I want to use more or less ships in the game
        return Object.values(personalBoard.ships).reduce((prev, { length }) => prev + length, 0)
    }


    return {
        attack(coord) {
            enemyBoard.receiveAttack(coord);
        },
        randomlyPlaceShips() {//for the CPU to place ships in valid spots when called. select random coords(in a limited alphabetical and numerical range A-J,1-10) and X/Y axis
            while (enemyBoard.shipOccupiedCoords.length < sumOfSpotsTaken()) {
                for (let i = 0; i < Object.keys(enemyBoard.ships).length; i++) {
                    enemyBoard.placeShip(enemyBoard.ships[Object.keys(enemyBoard.ships)[i]], ''/*random coord*/, ''/*random axis*/)
                }

            }
        },
        board: personalBoard.board,
        sumOfSpotsTaken

    }
}

