import { MusicCollection } from "./assets/audio/music/music-collection";


let musicPlaying = false;
let sfxActive = false;

export function audioController() {
    const audioControls = document.createElement('div');
    audioControls.className = 'audio-controls';
    const music = document.createElement('button');
    music.id = 'music-btn';
    music.textContent = 'Music 🔇'
    let titleScreenMusic = MusicCollection().titleScreen;
    let gameOverMusic = MusicCollection().gameOverScreen;

    music.addEventListener('click', function toggleMusic() {
        if (document.querySelector('.title-screen')) {
            if (musicPlaying === false) {
                titleScreenMusic.play();
                musicPlaying = true;
                music.textContent = 'Music 🔊'


            } else {
                titleScreenMusic.pause();
                musicPlaying = false;
                music.textContent = 'Music 🔇'

            }
        }

        if (document.querySelector('.game-over-screen')) {
            if (musicPlaying === false) {
                gameOverMusic.play();
                musicPlaying = true;
                music.textContent = 'Music 🔊'


            } else {
                gameOverMusic.pause();
                musicPlaying = false;
                music.textContent = 'Music 🔇'

            }
        }

    })

    const sfx = document.createElement('button');
    sfx.id = 'sfx-btn';
    sfx.textContent = 'Sfx 🔇';

    sfx.addEventListener('click', function toggleMusic() {
        if (sfxActive === false) {
            sfxActive = true;
            sfx.textContent = 'Sfx 🔊'


        } else {
            sfxActive = false;
            sfx.textContent = 'Sfx 🔇'

        }
    })



    audioControls.append(music, sfx);
    document.body.appendChild(audioControls);

    return {
        playSfx: (sfxFile) => {
            if (sfxActive === true) {
                sfxFile.play();
            }
        }
    }

}
