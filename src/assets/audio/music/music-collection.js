import Introduction from '../music/Introduction.flac'
import Enclosure from '../music/Enclosure.flac'

import Cavern from "../music/Cavern.flac";
import Colosseo from "../music/Colosseo.flac";
import Encounter from "../music/Encounter.flac";
import Hind from "../music/Hind D.flac";
import Intruder from "../music/Intruder 1.flac";
import Mantis from "../music/Mantis' Hymn.flac";
import VRTraining from "../music/VR Training.flac";

export const MusicCollection = () => {
    const titleScreen = new Audio(Introduction);
    titleScreen.volume = 0.5;
    titleScreen.addEventListener('ended', function () {//loops the song over and over
        this.currentTime = 0;
        this.play();
    })

    const playlist = [Cavern, Colosseo, Encounter, Hind, Intruder, Mantis, VRTraining];

    let inGame = new Audio(playlist[Math.floor(Math.random() * playlist.length)]);
    inGame.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    })

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
