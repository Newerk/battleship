/* 
---DETERMINES HOW THE CPU WILL DECIDE TO PLAY A TURN---

CPU will firstly attack at random

Next turn:
if prev attack was a hit, attack an unhit location on the board that is one space up, down, left or right. if that next attack was a miss, attempt a differnt spot that was one
space away from the hit location, exmaple:
cpu attacks B3, it was a hit
next turn the CPU can either attack B2,B4,A3,C3
this is where keeping track of hit locations become important
depending on which spot was hit on the next turn after B3 will determine if it keep trying vertical postions or horizontal positions

cpu does B3->B4. what will be the computer's logic in this situation? since the cpu traveled down vertically from B3 to B4, it will attempt B5 next IF B5 isnt already on the hit or miss
list. 

Next turn:
cpu tries B5, turns out it was a miss.

Next turn:
The cpu will now attempt B2 next. The cpu will continue along a single axis until a ship is sunk. in this case, after the cpu attacks B2, 
it will have sunk a ship (submarine w/ a length of 3)
The submarine occupied coordinates B2->B3->B4

the cpu will check after each hit (not miss), if a ship isSunk(), 

after a ship was sunk, the cpu will now go back to attacking random locations until another ship is hit, and go through this entire process again
*/