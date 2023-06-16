import Introduction from '../music/Introduction.flac'
import Enclosure from '../music/Enclosure.flac'

export const MusicCollection = () => {
    const titleScreen = new Audio(Introduction);
    titleScreen.volume = 0.5;
    titleScreen.addEventListener('ended', function () {//loops the song over and over
        this.currentTime = 0;
        this.play();
    })

    const inGame = {

    };

    const gameOverScreen = new Audio(Enclosure);
    gameOverScreen.volume = 0.5;
    gameOverScreen.addEventListener('ended', function () {//loops the song over and over
        this.currentTime = 0;
        this.play();
    })


    return {
        titleScreen,
        inGame,
        gameOverScreen
    }

};
