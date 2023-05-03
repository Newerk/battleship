import _ from 'lodash';
import { DOM } from './DOM';

//crt effect
const crt = document.createElement('div');
crt.id = 'crt';
document.body.appendChild(crt);

//Make a fade in and out to black when changing screens. Perhaps this can be done w/ pure CSS
// DOM().loadTitleScreen();
// DOM().loadInGameScreen();
DOM().loadCharacterSelectScreen();


/*use localStorage to keep track of the characters used in the game.
if there are no characters selected, load a character selection page (after the user presses enter on title screen).
also allow the user the randomly choose characters. Has to make sure that the player and 
cpu dont use the same characters(including their variants). Figure out a way to allow user to 
change characters. perhaps add a button on the top right of the title screen. and then have a button
on the end gmae screen with options such as , play again, return to character selection,
 and exit game(returns to title screen).

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