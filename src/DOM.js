import "./style.css";

export const DOM = () => {
    let content = document.createElement('div');
    content.setAttribute('style', 'height: 100vh; width: 100vw')
    content.id = 'content';
    return {
        loadTitleScreen() {
            content.classList.remove(...content.classList);
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
                    this.loadInGameScreen();
                    document.removeEventListener('keypress', enterEvent);
                }
            }
            document.addEventListener('keypress', enterEvent);

        },
        loadInGameScreen() {
            content.innerHTML = "";
            // content.classList.remove(...content.classList);
            content.className = 'in-game-screen';

            const codecContainer = document.createElement('div');
            codecContainer.id = 'codec-container';

            const playerPicture = document.createElement('div');
            playerPicture.id = 'player-pic';

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
            freqCoord.id = 'coord';
            freqCoord.textContent = 'A.10';
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

            codecContainer.append(playerPicture, freqContainter, enemyPicture);

            const subtitlesBox = document.createElement('div');
            subtitlesBox.id = 'subtitles-box';
            subtitlesBox.textContent = 'Attack A10 was a miss';

            const gameboardsContainer = document.createElement('div');
            gameboardsContainer.id = 'gameboard-container';

            const renderGameBoard = (user) => {
                const board = document.createElement('div');
                board.className = 'board';
                board.classList.add(user);

                for (let i = 0; i < 100; i++) {
                    let pixel = document.createElement('div');
                    pixel.className = 'pixel';
                    board.appendChild(pixel);
                }

                return board;
            }

            gameboardsContainer.append(renderGameBoard('player'), renderGameBoard('computer'))



            content.append(codecContainer, subtitlesBox, gameboardsContainer)


            document.body.appendChild(content);

        },
    }
}