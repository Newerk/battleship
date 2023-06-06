import _ from 'lodash';
import { DOM } from './DOM';
import './local-storage'
import { MusicCollection } from './assets/audio/music/music-collection';

//crt effect
const crt = document.createElement('div');
crt.id = 'crt';
document.body.appendChild(crt);

const audioControls = document.createElement('div');
audioControls.className = 'audio-controls';
const music = document.createElement('button');
music.textContent = 'Music 🔇'
music.addEventListener('click', function playMusic() {
    MusicCollection().titleScreen.play();
    music.removeEventListener('click', playMusic)

})
const sfx = document.createElement('button');
sfx.textContent = 'Sfx 🔇';

audioControls.append(music, sfx);
document.body.appendChild(audioControls);


//Make a fade in and out to black when changing screens. Perhaps this can be done w/ pure CSS
DOM().loadTitleScreen();
// DOM().loadCharacterSelectScreen();
// DOM().loadInGameScreen();
// DOM().loadGameOverScreen();

