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

        },
        loadInGameScreen() {
            content.classList.remove(...content.classList);
            content.className = 'in-game-screen';

        },
    }
}