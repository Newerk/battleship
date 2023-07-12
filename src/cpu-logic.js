import _ from "lodash";
import { audioController, playSfx } from "./audio-control";
import { SfxCollection } from "./assets/audio/sfx/sfx-collection";

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

    const latestMove = () => enemy.allAttackedLocationsPersonalBoard.at(-1);
    const lastHit = () => enemy.hitsOnPersonalBoard.at(-1);

    if (currentDirection === undefined) {
        cpu.randomAttack(enemy);

        const moveset = populateMoveset(latestMove());

        const nextPossibleMoves = _.filter(moveset, (el) => {
            return (!_.includes(enemy.hitsOnPersonalBoard, el) && enemy.board[el])
        })

        const chosenAttack = nextPossibleMoves[Math.floor(Math.random() * nextPossibleMoves.length)];

        if (enemy.hitsOnPersonalBoard.length !== enemyBoardHits) {
            document.querySelector('#subtitles-box').textContent = `${lastHit()} was a hit.  `;
            playSfx(SfxCollection().hit);

            let getShip = enemy.gameBoard.board[lastHit()].occupiedBy;
            if (enemy.gameBoard.ships[getShip]) {
                if (enemy.gameBoard.ships[getShip].isSunk() === true) {
                    document.querySelector('#subtitles-box').textContent = `Your ${getShip} was sunk`;

                    enemy.gameBoard.ships[getShip].occupying.forEach(el => {
                        document.querySelector('.board.player').querySelector(`#${el}`).classList.add('sunk');
                    })

                }

            }
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

        } else {
            currentDirection = undefined;
            document.querySelector('#subtitles-box').textContent = `${latestMove()} was a miss. `;
            playSfx(SfxCollection().miss);

        }


    } else {
        const enemyBoardHits = enemy.hitsOnPersonalBoard.length;


        if (backTrackerIsActive === true) {
            cpu.attack(enemy, attackBacktracker);
            backTrackerIsActive = false;

            if (enemyBoardHits !== enemy.hitsOnPersonalBoard.length) {
                document.querySelector('#subtitles-box').textContent = `${attackBacktracker} was a hit.  `;
                playSfx(SfxCollection().hit);


                let getShip = enemy.gameBoard.board[attackBacktracker].occupiedBy;
                if (enemy.gameBoard.ships[getShip]) {
                    if (enemy.gameBoard.ships[getShip].isSunk() === true) {
                        document.querySelector('#subtitles-box').textContent = `Your ${getShip} was sunk`;
                        playSfx(SfxCollection().sunk);


                        enemy.gameBoard.ships[getShip].occupying.forEach(el => {
                            document.querySelector('.board.player').querySelector(`#${el}`).classList.add('sunk');
                        })
                    }
                }


            } else {
                document.querySelector('#subtitles-box').textContent = `${attackBacktracker} was a miss.  `;
                playSfx(SfxCollection().miss);


            }


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
                    document.querySelector('#subtitles-box').textContent = `${lastHit()} was a hit.  `;
                    playSfx(SfxCollection().hit);

                    let getShip = enemy.gameBoard.board[lastHit()].occupiedBy;
                    if (enemy.gameBoard.ships[getShip]) {
                        if (enemy.gameBoard.ships[getShip].isSunk() === true) {
                            document.querySelector('#subtitles-box').textContent = `Your ${getShip} was sunk`;
                            playSfx(SfxCollection().sunk);


                            enemy.gameBoard.ships[getShip].occupying.forEach(el => {
                                document.querySelector('.board.player').querySelector(`#${el}`).classList.add('sunk');
                            })

                        }
                    }


                    if (enemy.board[coord].occupiedBy === 'water') {
                        document.querySelector('#subtitles-box').textContent = `${coord} was a miss. `;
                        playSfx(SfxCollection().miss);



                        while (_.includes(enemy.allAttackedLocationsPersonalBoard, backTracker)) {
                            let store = backTracker

                            switch (currentDirection) {
                                case 'up':
                                    backTracker = populateMoveset(store)[1];
                                    break;

                                case 'down':
                                    backTracker = populateMoveset(store)[0];
                                    break;

                                case 'left':
                                    backTracker = populateMoveset(store)[3];
                                    break;

                                case 'right':
                                    backTracker = populateMoveset(store)[2];
                                    break;
                            }

                        }
                        if (!enemy.board[backTracker] || !_.includes(enemy.allAttackedLocationsPersonalBoard, backTracker)) {
                            oppositeDirection();
                            backTrackerIsActive = true;
                            attackBacktracker = backTracker;

                        }
                    }

                }
                else {
                    backTrackerIsActive = false;
                    currentDirection = undefined;

                    cpu.randomAttack(enemy);

                    if (enemy.board[latestMove()].occupiedBy !== 'water') {
                        document.querySelector('#subtitles-box').textContent = `${latestMove()} was a hit.  `;
                        playSfx(SfxCollection().hit);


                        let getShip = enemy.gameBoard.board[latestMove()].occupiedBy;
                        if (enemy.gameBoard.ships[getShip]) {
                            if (enemy.gameBoard.ships[getShip].isSunk() === true) {
                                document.querySelector('#subtitles-box').textContent = `Your ${getShip} was sunk`;
                                playSfx(SfxCollection().sunk);


                                enemy.gameBoard.ships[getShip].occupying.forEach(el => {
                                    document.querySelector('.board.player').querySelector(`#${el}`).classList.add('sunk');
                                })

                            }
                        }

                    } else {
                        document.querySelector('#subtitles-box').textContent = `${latestMove()} was a miss.  `;
                        playSfx(SfxCollection().miss);
                    }


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