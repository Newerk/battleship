import { SpriteCollection } from "./assets/characters/sprite-collection";

(() => {
    if (!localStorage.getItem('player_img')) {
        localStorage.setItem('player_img', SpriteCollection.SolidSnake_1().url);
        localStorage.setItem('player_name', SpriteCollection.SolidSnake_1().name);

    }

    if (!localStorage.getItem('cpu_img')) {
        localStorage.setItem('cpu_img', SpriteCollection.SniperWolf().url);
        localStorage.setItem('cpu_name', SpriteCollection.SniperWolf().name);

    }

    //local storage should also keep track if the audio is muted or not. There will be a music and sfx option on the top left corner of all pages(title, char select, game, gaveover)
})();