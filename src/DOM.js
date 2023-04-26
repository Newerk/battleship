import "./style.css";

export const DOM = () => {
    let content = document.createElement('div');
    content.setAttribute('style', 'height: 100vh; width: 100vw')
    content.id = 'content';
    return {
        loadTitleScreen() {
            content.classList.remove(...content.classList);
            content.className = 'title-screen';

            const title = document.createElement('h1');
            title.id = 'title';
            title.textContent = '$BATTLESHIP';
            // content.appendChild(title);
            document.body.appendChild(content.appendChild(title))

        },
        loadInGameScreen() {
            content.classList.remove(...content.classList);
            content.className = 'in-game-screen';

        },
    }
}
