import _ from 'lodash';
import { DOM } from './DOM';
import './local-storage'
import { audioController } from './audio-control';

const crt = document.createElement('div');
crt.id = 'crt';
document.body.appendChild(crt);

audioController();

DOM().loadTitleScreen();

