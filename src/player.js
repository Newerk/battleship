// import { Gameboard } from "./gameboard"

export const Player = () => {
    return {
        attack(coord, enemyBoard) {
            enemyBoard.recieveAttack(coord)
        }
    }
}