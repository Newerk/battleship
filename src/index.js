import _ from 'lodash';
import { DOM } from './DOM';
import './local-storage'

//crt effect
const crt = document.createElement('div');
crt.id = 'crt';
document.body.appendChild(crt);

//Make a fade in and out to black when changing screens. Perhaps this can be done w/ pure CSS
// DOM().loadTitleScreen();
// DOM().loadCharacterSelectScreen();
DOM().loadInGameScreen();
