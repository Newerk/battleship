import _ from 'lodash';
import { DOM } from './DOM';

//crt effect
const crt = document.createElement('div');
crt.id = 'crt';
document.body.appendChild(crt);

DOM().loadTitleScreen();
// DOM().loadInGameScreen();


/*use localStorage to keep track of the characters used in the game.
if there are not characters selected, load a character selection page (after the user presses enter on title screen).
also allow the user the randomly choose characters. Has to make sure that the player and 
cpu dont use the same characters(including their variants). Figure out a way to allow user to 
change characters. perhaps had a button on the top right of the title screen. and then have a button
on the end gmae screen with options such as , play again, return to character select(returns to char selection),
 and exit game(returns to title screen).1

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