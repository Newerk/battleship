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

    // let moveset = [
    //     `${prevMove[0]}${parseInt(prevMove.slice(1)) - 1}`,//up
    //     `${prevMove[0]}${parseInt(prevMove.slice(1)) + 1}`,//down
    //     `${columns[columns.indexOf(prevMove[0]) - 1]}${prevMove.slice(1)}`,//left
    //     `${columns[columns.indexOf(prevMove[0]) + 1]}${prevMove.slice(1)}`//right
    // ]

    if (currentDirection === undefined) {
        //run a random attack to jumpstart the logic if the cpu logic is currently not being applied
        cpu.randomAttack(enemy);


        //check if attack was a hit or miss

        const latestMove = enemy.hitsOnPersonalBoard.at(-1);//update latest move

        const nextPossibleMoves = _.filter(populateMoveset(latestMove), (el) => {
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

        } else {//attack was a miss
            currentDirection = undefined;
        }

    } else {
        //get the next possible moves based on current location
        // let nextPossibleMoves = _.filter(moveset, (el) => {
        //     return (!_.includes(enemy.hitsOnPersonalBoard, el) && enemy.board[el])
        // })

        const latestMove = enemy.hitsOnPersonalBoard.at(-1);//update latest move

        switch (currentDirection) {
            case 'up' && cpu.board[populateMoveset(latestMove)[0]]:
                cpu.attack(populateMoveset(latestMove)[0]);

                break;

            case 'down' && cpu.board[populateMoveset(latestMove)[1]]:
                cpu.attack(populateMoveset(latestMove)[1]);

                break;

            case 'left' && cpu.board[populateMoveset(latestMove)[2]]:
                cpu.attack(populateMoveset(latestMove)[2]);

                break;

            case 'right' && cpu.board[populateMoveset(latestMove)[3]]:
                cpu.attack(populateMoveset(latestMove)[3]);

                break;

            default:
                currentDirection = undefined;
                cpu.randomAttack(enemy);
                break;

        }
        //randomly choose a direction from the next possible moves
        // let chosenAttack = nextPossibleMoves[Math.floor(Math.random() * nextPossibleMoves.length)];

        // cpu.attack(chosenAttack);

    }
    // return nextPossibleMoves;
    // return chosenAttack;
}