import _ from "lodash";

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
            document.querySelector('#subtitles-box').textContent = `${lastHit()} was a hit.  `;

            let getShip = enemy.gameBoard.board[lastHit()].occupiedBy;
            if (enemy.gameBoard.ships[getShip].isSunk() === true) {
                document.querySelector('#subtitles-box').textContent = `Your ${getShip} was sunk`;
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

        } else {//attack was a miss
            console.log('attack was a miss')
            currentDirection = undefined;
            document.querySelector('#subtitles-box').textContent = `${latestMove()} was a miss. `;
        }


    } else {
        const enemyBoardHits = enemy.hitsOnPersonalBoard.length;


        if (backTrackerIsActive === true) {
            cpu.attack(enemy, attackBacktracker);
            backTrackerIsActive = false;

            if (enemyBoardHits !== enemy.hitsOnPersonalBoard.length) {
                document.querySelector('#subtitles-box').textContent = `${attackBacktracker} was a hit.  `;

                let getShip = enemy.gameBoard.board[attackBacktracker].occupiedBy;
                if (enemy.gameBoard.ships[getShip].isSunk() === true) {
                    document.querySelector('#subtitles-box').textContent = `Your ${getShip} was sunk`;

                    enemy.gameBoard.ships[getShip].occupying.forEach(el => {
                        document.querySelector('.board.player').querySelector(`#${el}`).classList.add('sunk');
                    })
    
                }


            } else {
                document.querySelector('#subtitles-box').textContent = `${attackBacktracker} was a miss.  `;

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
                    let getShip = enemy.gameBoard.board[lastHit()].occupiedBy;
                    if (enemy.gameBoard.ships[getShip].isSunk() === true) {
                        document.querySelector('#subtitles-box').textContent = `Your ${getShip} was sunk`;

                        enemy.gameBoard.ships[getShip].occupying.forEach(el => {
                            document.querySelector('.board.player').querySelector(`#${el}`).classList.add('sunk');
                        })        

                    }



                    if (enemy.board[coord].occupiedBy === 'water') {
                        document.querySelector('#subtitles-box').textContent = `${coord} was a miss. `;


                        console.log('attack was a miss. prev attack was a hit')

                        while (_.includes(enemy.allAttackedLocationsPersonalBoard, backTracker)) {
                            let store = backTracker

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

                    if (enemy.board[latestMove()].occupiedBy !== 'water') {
                        document.querySelector('#subtitles-box').textContent = `${latestMove()} was a hit.  `;

                        let getShip = enemy.gameBoard.board[latestMove()].occupiedBy;
                        if (enemy.gameBoard.ships[getShip].isSunk() === true) {
                            document.querySelector('#subtitles-box').textContent = `Your ${getShip} was sunk`;

                            enemy.gameBoard.ships[getShip].occupying.forEach(el => {
                                document.querySelector('.board.player').querySelector(`#${el}`).classList.add('sunk');
                            })
            
                        }


                    } else {
                        document.querySelector('#subtitles-box').textContent = `${latestMove()} was a miss.  `;

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