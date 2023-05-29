import _ from "lodash";

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
let backTrackerIsActive = false;
let attackBacktracker = undefined;

export function cpuAttack(cpu, enemy, direction = currentDirection) {
    const enemyBoardHits = enemy.hitsOnPersonalBoard.length;
    let columns = 'ABCDEFGHIJ';

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

        const moveset = populateMoveset(latestMove());

        const nextPossibleMoves = _.filter(moveset, (el) => {
            return (!_.includes(enemy.hitsOnPersonalBoard, el) && enemy.board[el])
        })

        const chosenAttack = nextPossibleMoves[Math.floor(Math.random() * nextPossibleMoves.length)];

        //check if attack was a hit or miss
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
            console.log('attack was a miss')
            currentDirection = undefined;
        }


    } else {

        if (backTrackerIsActive === true) {
            cpu.attack(enemy, attackBacktracker);
            backTrackerIsActive = false;

        } else {

            const moveset = populateMoveset(lastHit());
            const enemyBoardMisses = enemy.missesOnPersonalBoard.length;

            let backTracker = lastHit();

            const makeChoice = () => {
                let coord;

                switch (currentDirection) {
                    case 'up':
                        coord = moveset[0];
                        break;

                    case 'down':
                        coord = moveset[1];
                        break;

                    case 'left':
                        coord = moveset[2];
                        break;

                    case 'right':
                        coord = moveset[3];
                        break;
                }


                if (_.includes(Object.keys(enemy.board), coord) && !_.includes(enemy.allAttackedLocationsPersonalBoard, coord)) {
                    cpu.attack(enemy, coord);

                    if (enemy.board[coord].occupiedBy === 'water') {
                        console.log('attack was a miss. prev attack was a hit')

                        while (_.includes(enemy.allAttackedLocationsPersonalBoard, backTracker)) {
                            let store = backTracker
                            console.log('loop')

                            switch (currentDirection) {
                                case 'up':
                                    backTracker = populateMoveset(store)[1]
                                    break;

                                case 'down':
                                    backTracker = populateMoveset(store)[0]
                                    break;

                                case 'left':
                                    backTracker = populateMoveset(store)[3]
                                    break;

                                case 'right':
                                    backTracker = populateMoveset(store)[2]
                                    break;
                            }

                        }
                        if (!enemy.board[backTracker] || !_.includes(enemy.allAttackedLocationsPersonalBoard, backTracker)) {
                            oppositeDirection();
                            console.log(`switching direction to ${currentDirection}`)
                            backTrackerIsActive = true;
                            console.log(`backtracker is now ${backTrackerIsActive}`)
                            attackBacktracker = backTracker;
                        }
                    }
                }
                else {
                    backTrackerIsActive = false;
                    currentDirection = undefined;

                    cpu.randomAttack(enemy);
                }
            }


            switch (currentDirection) {
                case 'up':
                    makeChoice();

                    break;

                case 'down':
                    makeChoice();


                    break;

                case 'left':
                    makeChoice();

                    break;

                case 'right':
                    makeChoice();

                    break;
            }
        }

    }
    console.log(currentDirection)
}

function oppositeDirection() {
    switch (currentDirection) {
        case 'up':
            currentDirection = 'down';

            break;

        case 'down':
            currentDirection = 'up';

            break;

        case 'left':
            currentDirection = 'right';

            break;

        case 'right':
            currentDirection = 'left';

            break;
    }
}