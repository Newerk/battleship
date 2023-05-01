import _ from 'lodash';
import { DOM } from './DOM';

//crt effect
const crt = document.createElement('div');
crt.id = 'crt';
document.body.appendChild(crt);

DOM().loadTitleScreen();
// DOM().loadInGameScreen();