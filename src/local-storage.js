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

})();