import _ from 'lodash';
import { DOM } from './DOM';

//crt effect
const crt = document.createElement('div');
crt.id = 'crt';
document.body.appendChild(crt);

// DOM().loadTitleScreen();
DOM().loadInGameScreen();


/*use localStorage to keep track of the characters used in the game.
if there are not characters selected, load a character selection page (after the user presses enter on title screen).
also allow the user the randomly choose characters. Has to make sure that the player and 
cpu dont use the same characters(including their variants)

     PLAYER               COMPUTER
  [random btn]          [random btn]  
_________________     _________________   
| | | | | | | | |     | | | | | | | | |    
-----------------     -----------------    
| | | | | | | | |     | | | | | | | | |    
-----------------     -----------------    

                            [continue]

my planned layout for the charcter selection screen
*/