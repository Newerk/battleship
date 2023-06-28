import _ from 'lodash';
import { DOM } from './DOM';
import './local-storage'
import { audioController } from './audio-control';

//crt effect
const crt = document.createElement('div');
crt.id = 'crt';
document.body.appendChild(crt);

audioController();

//Make a fade in and out to black when changing screens. Perhaps this can be done w/ pure CSS
// DOM().loadTitleScreen();
// DOM().loadCharacterSelectScreen();
// DOM().loadInGameScreen();
DOM().loadGameOverScreen();

