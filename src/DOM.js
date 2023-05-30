import { SpriteCollection } from "./assets/characters/sprite-collection";
import { gameplayLoop, setupGame } from "./game-loop";
import { Gameboard } from "./gameboard";
import "./style.css";


export const DOM = () => {
    let content = document.createElement('div');
    content.setAttribute('style', 'height: 100vh; width: 100vw')
    content.id = 'content';
    return {
        loadTitleScreen() {
            // content.classList.remove(...content.classList);
            content.innerHTML = "";

            content.className = 'title-screen';

            const topText = document.createElement('div');
            topText.id = 'top-text';

            const subtitle = document.createElement('h3');
            subtitle.id = 'sub-title';
            subtitle.textContent = 'open water warfare';

            const title = document.createElement('h1');
            title.id = 'title';
            title.textContent = '$BATTLESHIP';
            topText.append(subtitle, title)

            const middleSpace = document.createElement('div');
            middleSpace.id = 'space';


            const message = document.createElement('h3');
            message.id = 'message';
            message.textContent = 'PRESS ENTER BUTTON';

            content.append(topText, middleSpace, message);
            document.body.appendChild(content)

            const enterEvent = (e) => {
                if (e.key === "Enter") {
                    this.loadCharacterSelectScreen();
                    document.removeEventListener('keypress', enterEvent);
                }
            }
            document.addEventListener('keypress', enterEvent);

        },
        loadInGameScreen() {
            const game = setupGame();

            content.innerHTML = "";
            // content.classList.remove(...content.classList);
            content.className = 'in-game-screen';

            const codecContainer = document.createElement('div');
            codecContainer.id = 'codec-container';

            const playerPicture = document.createElement('div');
            playerPicture.id = 'player-pic';
            playerPicture.setAttribute('style', `background-image: url(${localStorage.getItem('player_img')});`)

            // {
            const freqContainter = document.createElement('div');
            freqContainter.id = 'frequency-container';

            const freqHeader = document.createElement('div');
            freqHeader.id = 'freq-header';
            const freqHeaderText = document.createElement('p');
            freqHeaderText.id = 'freq-header-text';
            freqHeaderText.textContent = 'PTT';
            freqHeader.appendChild(freqHeaderText);

            const freqMiddle = document.createElement('div');
            freqMiddle.id = 'freq-middle';
            const freqMiddleContainer = document.createElement('div');
            freqMiddleContainer.id = 'fq-mid-container';

            const freqScreen = document.createElement('div');
            freqScreen.id = 'freq-screen';

            for (let i = 0; i < 9; i++) {
                const freqBars = document.createElement('div');
                freqBars.className = 'freq-bar';
                freqBars.setAttribute('style', `height: 100%; width: 100%;`)

                if (i >= 3) {
                    freqBars.classList.add('active');
                }
                freqScreen.appendChild(freqBars)
            }

            const freqCoordContainer = document.createElement('div');
            freqCoordContainer.id = 'freq-coord-container';
            const freqCoord = document.createElement('p');
            freqCoord.id = 'freq-coord';
            freqCoordContainer.appendChild(freqCoord);
            freqScreen.appendChild(freqCoordContainer)

            freqMiddleContainer.appendChild(freqScreen)

            const freqLeftContainer = document.createElement('div');
            freqLeftContainer.id = 'fq-left-container';
            const freqLeftArrow = document.createElement('p');
            freqLeftArrow.id = 'fq-left-arrow';
            freqLeftArrow.textContent = '◀︎';
            freqLeftContainer.appendChild(freqLeftArrow)

            const freqRightContainer = document.createElement('div');
            freqRightContainer.id = 'fq-right-container';
            const freqRightArrow = document.createElement('p');
            freqRightArrow.id = 'fq-right-arrow';
            freqRightArrow.textContent = '▶︎';
            freqRightContainer.appendChild(freqRightArrow)


            freqMiddle.append(freqLeftContainer, freqMiddleContainer, freqRightContainer);

            const freqFooter = document.createElement('div');
            freqFooter.id = 'freq-footer';
            const freqFooterText = document.createElement('p');
            freqFooterText.id = 'freq-footer-text';
            freqFooterText.textContent = 'MEMORY';
            freqFooter.appendChild(freqFooterText);

            freqContainter.append(freqHeader, freqMiddle, freqFooter);
            // }

            const enemyPicture = document.createElement('div');
            enemyPicture.id = 'enemy-pic';
            enemyPicture.setAttribute('style', `background-image: url(${localStorage.getItem('cpu_img')});`)

            codecContainer.append(playerPicture, freqContainter, enemyPicture);

            const subtitlesBox = document.createElement('div');
            subtitlesBox.id = 'subtitles-box';
            subtitlesBox.textContent = 'Place your ships. Press "R" to rotate';

            const gameboardsContainer = document.createElement('div');
            gameboardsContainer.id = 'gameboard-container';

            const renderGameBoard = (user) => {
                let orientation = 'Y';

                const changeOrientation = (e) => {
                    if (e.key === 'r' && orientation === 'X') {
                        orientation = 'Y';
                    } else if (e.key === 'r' && orientation === 'Y') {
                        orientation = 'X';
                    }
                }

                document.body.addEventListener('keydown', changeOrientation);

                let currentShipIndex = 0;

                const boardContainer = document.createElement('div');
                boardContainer.className = 'board-container';
                const xAxis = document.createElement('div');
                xAxis.className = 'board-x-axis';

                const yAxis = document.createElement('div');
                yAxis.className = 'board-y-axis';

                const x = 'ABCDEFGHIJ';
                const y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

                for (let i = 0; i < 10; i++) {
                    const value = document.createElement('div');
                    value.textContent = x[i];
                    xAxis.appendChild(value);

                }
                for (let i = 0; i < 10; i++) {
                    const value = document.createElement('div');
                    value.textContent = y[i];
                    yAxis.appendChild(value);

                }

                const board = document.createElement('div');
                board.className = 'board';
                board.classList.add(user)
                boardContainer.classList.add(user);


                let ghostShip = game.player.gameBoard;


                for (let i = 0; i < 10; i++) {
                    let num = y[i]
                    for (let j = 0; j < 10; j++) {
                        let pixel = document.createElement('div');
                        pixel.className = 'pixel';
                        pixel.id = `${x[j]}${num}`;

                        let getArrOfOccupiedIDs = () => {
                            let arr = [];
                            document.querySelectorAll('.occupied').forEach(el => {
                                arr.push(el.id)
                            })
                            return arr;
                        }


                        const clickToAttack = () => {
                            if (pixel.parentElement.classList.contains('active')) {

                                if (game.cpu.occupiedCoords.includes(pixel.id)) {
                                    pixel.classList.add('hit');
                                    game.player.attack(game.cpu, pixel.id)

                                } else {
                                    pixel.classList.add('miss');
                                    game.player.attack(game.cpu, pixel.id)

                                }
                                gameplayLoop(game);//code breaks once the game is over beacuse the rest of the code doesnt get to run
                                document.querySelector('.board.player').querySelectorAll('.pixel').forEach(el => {
                                    if (game.player.hitsOnPersonalBoard[game.player.hitsOnPersonalBoard.length - 1] === el.id) {
                                        el.classList.add('hit')

                                    }
                                    if (game.player.missesOnPersonalBoard[game.player.missesOnPersonalBoard.length - 1] === el.id) {
                                        el.classList.add('miss')

                                    }

                                    if (game.cpu.gameBoard.allShipsSunk() === true || game.player.gameBoard.allShipsSunk() === true) {
                                        // alert('game over!');
                                        this.loadGameOverScreen();
                                    }

                                })
                            }

                        }

                        const clickToAddShip = () => {
                            if (pixel.parentElement.classList.contains('player')) {
                                let previewShip = ghostShip.placeShip(Object.values(ghostShip.ships)[currentShipIndex], pixel.id, orientation);

                                if (game.player.occupiedCoords.length === 17) {
                                    document.removeEventListener('keydown', changeOrientation)
                                    document.querySelector('#subtitles-box').textContent = "Make your first attack";
                                    document.querySelector('#freq-coord').innerHTML = "";
                                    document.querySelector('.board.computer').classList.add('active');

                                }
                                if (previewShip === true && game.player.occupiedCoords.length < 17) {
                                    currentShipIndex++;
                                }

                                if (game.player.occupiedCoords.length <= 17) {
                                    game.player.occupiedCoords.forEach(coord => {
                                        document.querySelector(`#${coord}`).classList.add('occupied');
                                    })
                                }

                            }

                            document.removeEventListener('click', clickToAddShip)
                        }

                        const previewShipWithHover = () => {
                            let blankBoard = Gameboard();

                            if (pixel.parentElement.classList.contains('player') && game.player.occupiedCoords.length < 17) {
                                pixel.classList.add('preview');
                                blankBoard.placeShip(Object.values(blankBoard.ships)[currentShipIndex], pixel.id, orientation);
                                document.querySelector('#freq-coord').textContent = pixel.id[0] + '.' + pixel.id.slice(1);

                                Object.values(blankBoard.ships)[currentShipIndex].occupying.forEach(coord => {
                                    document.querySelector(`#${coord}`).classList.add('preview');
                                })

                                const removePreview = () => {
                                    pixel.classList.remove('preview');

                                    Object.values(blankBoard.ships)[currentShipIndex].occupying.forEach(coord => {
                                        document.querySelector(`#${coord}`).classList.remove('preview');
                                    })
                                    document.removeEventListener('mouseout', removePreview);
                                }
                                pixel.addEventListener("mouseout", removePreview)
                            }
                            document.removeEventListener('mouseover', previewShipWithHover);
                        }

                        pixel.addEventListener('click', clickToAddShip);
                        pixel.addEventListener('click', clickToAttack)
                        pixel.addEventListener('mouseover', previewShipWithHover)

                        board.appendChild(pixel);
                    }
                }

                boardContainer.append(xAxis, yAxis, board)

                return boardContainer;
            }

            gameboardsContainer.append(renderGameBoard('player'), renderGameBoard('computer'))



            content.append(codecContainer, subtitlesBox, gameboardsContainer)


            document.body.appendChild(content);

        },
        loadCharacterSelectScreen() {
            content.innerHTML = "";
            content.className = 'char-select-screen';

            const enterEvent = (e) => {
                if (e.key === "Enter") {
                    this.loadInGameScreen();
                    document.removeEventListener('keypress', enterEvent);
                }
            }

            const startGame = document.createElement('div');
            startGame.id = 'start-game';
            startGame.textContent = 'Press Enter to Continue'
            startGame.addEventListener('click', () => {
                this.loadInGameScreen();
                document.removeEventListener('click', enterEvent);

            })


            const playerPicture = document.createElement('div');
            playerPicture.id = 'cs-player-pic';
            playerPicture.setAttribute('style', `background-image: url(${localStorage.getItem('player_img')});`)

            const computerPicture = document.createElement('div');
            computerPicture.id = 'cs-computer-pic';
            computerPicture.setAttribute('style', `background-image: url(${localStorage.getItem('cpu_img')});`)


            const descriptonsContainer = document.createElement('div');
            descriptonsContainer.className = 'description-container';
            const playerDescription = document.createElement('div');
            playerDescription.id = 'player-description';
            playerDescription.textContent = localStorage.getItem('player_name');

            const computerDescription = document.createElement('div');
            computerDescription.id = 'cpu-description';
            computerDescription.textContent = localStorage.getItem('cpu_name');

            descriptonsContainer.append(playerDescription, computerDescription)

            const playerCharGrid = document.createElement('div');
            playerCharGrid.id = 'player-char-grid';
            const cpuCharGrid = document.createElement('div');
            cpuCharGrid.id = 'cpu-char-grid';

            const addRowsAndImages = (element) => {
                for (let i = 1; i <= 3; i++) {
                    const row = document.createElement('div');
                    row.className = `row-${i}`;
                    switch (row.className) {
                        case 'row-1':
                            row.appendChild(SpriteCollection.SolidSnake_1().picture);
                            row.appendChild(SpriteCollection.SolidSnake_2().picture);
                            row.appendChild(SpriteCollection.SolidSnake_3().picture);
                            row.appendChild(SpriteCollection.Master().picture);
                            row.appendChild(SpriteCollection.LiquidSnake().picture);
                            break;

                        case 'row-2':
                            row.appendChild(SpriteCollection.DrOctacon().picture);
                            row.appendChild(SpriteCollection.JimHouseman().picture);
                            row.appendChild(SpriteCollection.MeiLing().picture);
                            row.appendChild(SpriteCollection.NaomiHunter().picture);
                            break;

                        case 'row-3':
                            row.appendChild(SpriteCollection.Meryl_1().picture);
                            row.appendChild(SpriteCollection.Meryl_2().picture);
                            row.appendChild(SpriteCollection.SniperWolf().picture);
                            row.appendChild(SpriteCollection.RoyCampbell().picture);
                            break;
                    }
                    element.appendChild(row);
                }
            }

            addRowsAndImages(playerCharGrid);
            addRowsAndImages(cpuCharGrid);

            content.append(playerPicture, computerPicture, descriptonsContainer, playerCharGrid, cpuCharGrid, startGame)

            document.body.appendChild(content)


            document.addEventListener('keypress', enterEvent);
        },
        loadGameOverScreen() {
            content.innerHTML = "";
            content.className = 'game-over-screen';


            document.body.appendChild(content);
        },
    }
}