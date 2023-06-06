import Introduction from '../music/02. Introduction.flac'

export const MusicCollection = () => {
    const titleScreen = new Audio(Introduction);
    titleScreen.addEventListener('ended', function () {//loops the song over and over
        this.currentTime = 0;
        this.play();
    })

    const inGame = {

    };

    const gameOver = {

    };

    return {
        titleScreen,
        inGame,
        gameOver
    }

};

// MusicCollection().titleScreen.play();