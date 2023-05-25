import _ from "lodash";
import { Gameboard } from "./gameboard"
import { Player } from "./player"


/* 
---DETERMINES HOW THE CPU WILL DECIDE TO PLAY A TURN---

CPU will firstly attack at random

Next turn:
if prev attack was a hit, attack an unhit location on the board that is one space up, down, left or right. if that next attack was a miss, attempt a differnt spot that was one
space away from the hit location, exmaple:
cpu attacks B3, it was a hit
next turn the CPU can either attack B2,B4,A3,C3
this is where keeping track of hit locations become important
depending on which spot was hit on the next turn after B3, will determine if it keeps trying vertical postions or horizontal positions

cpu does B3->B4. what will be the computer's logic in this situation? since the cpu traveled down vertically from B3 to B4, it will attempt B5 next IF B5 isnt already on the hit or miss
list. 

Next turn:
cpu tries B5, turns out it was a miss.

Next turn:
The cpu will now attempt B2. The cpu will continue along a single axis until a ship is sunk. in this case, after the cpu attacks B2, 
it will have sunk a ship (submarine w/ a length of 3)
The submarine occupied coordinates B2->B3->B4

the cpu will check after each hit (not miss), if a ship isSunk(), 

after a ship was sunk, the cpu will now go back to attacking random locations until another ship is hit, and go through this entire process again
*/

let currentDirection = undefined;

export function cpuAttack(cpu, enemy, direction = currentDirection) {
    const enemyBoardHits = enemy.hitsOnPersonalBoard.length;
    let columns = 'ABCDEFGHIJ';
    // let prevMove = enemy.hitsOnPersonalBoard.at(-1);

    const populateMoveset = (prev) => {
        return [
            `${prev[0]}${parseInt(prev.slice(1)) - 1}`,//up
            `${prev[0]}${parseInt(prev.slice(1)) + 1}`,//down
            `${columns[columns.indexOf(prev[0]) - 1]}${prev.slice(1)}`,//left
            `${columns[columns.indexOf(prev[0]) + 1]}${prev.slice(1)}`//right
        ]
    }

    const latestMove = () => enemy.allAttackedLocationsPersonalBoard.at(-1);//update latest move
    const lastHit = () => enemy.hitsOnPersonalBoard.at(-1);


    if (currentDirection === undefined) {
        //run a random attack to jumpstart the logic if the cpu logic is currently not being applied
        cpu.randomAttack(enemy);

        //check if attack was a hit or miss
        const moveset = populateMoveset(latestMove());

        const nextPossibleMoves = _.filter(moveset, (el) => {
            return (!_.includes(enemy.hitsOnPersonalBoard, el) && enemy.board[el])
        })

        const chosenAttack = nextPossibleMoves[Math.floor(Math.random() * nextPossibleMoves.length)];

        if (enemy.hitsOnPersonalBoard.length !== enemyBoardHits) { //attack was hit
            switch (chosenAttack) {
                case moveset[0]:
                    currentDirection = 'up';
                    break;

                case moveset[1]:
                    currentDirection = 'down';
                    break;

                case moveset[2]:
                    currentDirection = 'left';
                    break;

                case moveset[3]:
                    currentDirection = 'right';
                    break;
            }

        }
        else {//attack was a miss
            currentDirection = undefined;
        }


    } else {

        const moveset = populateMoveset(latestMove());
        const enemyBoardMisses = enemy.missesOnPersonalBoard.length;

        switch (currentDirection) {
            case 'up':
                if (_.includes(Object.keys(enemy.board), moveset[0]) && !_.includes(enemy.allAttackedLocationsPersonalBoard, moveset[0])) {
                    cpu.attack(enemy, moveset[0]);
                } else {
                    cpu.randomAttack(enemy);

                }
                break;

            case 'down':
                if (_.includes(Object.keys(enemy.board), moveset[1]) && !_.includes(enemy.allAttackedLocationsPersonalBoard, moveset[1])) {
                    cpu.attack(enemy, moveset[1]);
                } else {
                    cpu.randomAttack(enemy);

                }
                break;

            case 'left':
                if (_.includes(Object.keys(enemy.board), moveset[2]) && !_.includes(enemy.allAttackedLocationsPersonalBoard, moveset[2])) {
                    cpu.attack(enemy, moveset[2]);
                } else {
                    cpu.randomAttack(enemy);

                }
                break;

            case 'right':
                if (_.includes(Object.keys(enemy.board), moveset[3]) && !_.includes(enemy.allAttackedLocationsPersonalBoard, moveset[3])) {
                    cpu.attack(enemy, moveset[3]);
                } else {
                    cpu.randomAttack(enemy);

                }
                break;
        }

        if (enemy.missesOnPersonalBoard.length !== enemyBoardMisses) {
            let backTracker = lastHit();

            switch (backTracker) {
                case populateMoveset(latestMove())[0]://is above missed attack
                    console.log(`previous attack was ${backTracker}`)

                    break;

                case populateMoveset(latestMove())[1]://is below missed attack
                    console.log(`previous attack was ${backTracker}`)

                    break;

                case populateMoveset(latestMove())[2]://is left of missed attack
                    console.log(`previous attack was ${backTracker}`)

                    break;

                case populateMoveset(latestMove())[3]://is right of missed attack
                    console.log(`previous attack was ${backTracker}`)

                    break;
            }

            currentDirection = undefined;
        }
    }
    console.log(currentDirection)
}