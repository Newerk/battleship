import { MusicCollection } from "./assets/audio/music/music-collection";

let titleScreenMusic = MusicCollection().titleScreen;
let inGameMusic = MusicCollection().inGame;
let gameOverMusic = MusicCollection().gameOverScreen;


export let audioStatus = {
    musicPlaying: false,
    titleMusicPlaying: false,
    inGameMusicPlaying: false,
    gameOverMusicPlaying: false,
    sfxActive: false,
}

export function audioController() {
    const audioControls = document.createElement('div');
    audioControls.className = 'audio-controls';
    const music = document.createElement('button');
    music.id = 'music-btn';
    music.textContent = 'Music 🔇'

    music.addEventListener('click', function toggleMusic() {
        if (audioStatus.musicPlaying === false) {
            audioStatus.musicPlaying = true;
            music.textContent = 'Music 🔊'
        } else {
            audioStatus.musicPlaying = false;
            music.textContent = 'Music 🔇'
        }
        playMusic();
    })

    const sfx = document.createElement('button');
    sfx.id = 'sfx-btn';
    sfx.textContent = 'Sfx 🔇';

    sfx.addEventListener('click', function toggleSfx() {
        if (audioStatus.sfxActive === false) {
            audioStatus.sfxActive = true;
            sfx.textContent = 'Sfx 🔊'

        } else {
            audioStatus.sfxActive = false;
            sfx.textContent = 'Sfx 🔇'

        }
    })

    audioControls.append(music, sfx);
    document.body.appendChild(audioControls);
}

export function playSfx(sfxFile) {
    if (audioStatus.sfxActive === true) {
        sfxFile.play();
    }
}

export function playMusic() {
    if (audioStatus.musicPlaying === true) {
        if (document.querySelector('.title-screen') || document.querySelector('.char-select-screen') ) {
            titleScreenMusic.play();
            inGameMusic.pause();
            gameOverMusic.pause();

        }

        if (document.querySelector('.in-game-screen')) {
            inGameMusic.play();
            titleScreenMusic.pause();
            gameOverMusic.pause();

        }
        if (document.querySelector('.game-over-screen')) {
            gameOverMusic.play();
            titleScreenMusic.pause();
            inGameMusic.pause();

        }
    } else {
        titleScreenMusic.pause();
        inGameMusic.pause();
        gameOverMusic.pause();
    }
}
