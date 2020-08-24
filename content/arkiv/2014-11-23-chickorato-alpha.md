---
Title : Chickorato (Alpha)
Author: Casper Kehlet Jensen
Description: A little HTML5 game inspired by Kokoriko, written with Phaser.js
---

This saturday I suddenly felt inspired to implement on of my recent favourite
board games.
A game inspired by LEGO's Kokoriko, in which the players fight to gather the
most eggs until finally the golden egg is obtained, which counts for 3.
Eggs can be stolen from each other, or your chicken farm can increase your
inventory.

## An improved version
On my trip to Sweden in the summer, with 4 great friends, we played this game,
which was already in a greatly altered shape before the trip.
Half a deck of cards had been introduced, and the worm tiles had gotten new
meaning and purpose.

Along the trip, the game further evolved as we invented and tried out new game
mechanics and rules to balance the game better and improve the experience.
For example, the only Rooster of the game was given additional powers in that
it might protect the chickens and/or eggs of the player currently holding the
rooster.

### Rules
The rules of the game is not final, and personally I am as of this writing
unaware of the exact rules that we agreed upon thus far. Therefore I will have
to consult my comrades.


## Phaser implementation
The current state of development is far from finished. Right now, you can not
participate in the game yourself. It is entirely controlled by a very simple
AI that I implemented. But the game is "winnable", and it features pixelated
graphics.

You can follow the development of the game via my repository 
[Chickorato at Github](https://github.com/SneManden/Chickorato).

![A few turns in the game](https://raw.githubusercontent.com/SneManden/Chickorato/master/img/screens/2014-11-23_11:12:35.png "A few turns in the game")
![Some players has acquired eggs now](https://raw.githubusercontent.com/SneManden/Chickorato/master/img/screens/2014-11-23_11:13:28.png "Some players has acquired eggs now")
![And Joe wins the game, had the golden egg too!](https://raw.githubusercontent.com/SneManden/Chickorato/master/img/screens/2014-11-23_11:19:51.png "And Joe wins the game, had the golden egg too!")

### Here is my todo list:

 * Add player-interaction (so that at least one human can participate)
 * Implement cards and worm mechanics
 * Multiplayer (offline and/or online)
 * Write about AI-implementation, so that anyone can implement their own AI
   (this is actually possible right now, although the info about game state and past events is poor / not available)
 * Add sounds
 * Improve the user interface
 * Add startup screen and menu
 * Add own bitmap-font