---
Title : Beating "Save Otto Griffis"
Author: Casper Kehlet Jensen
Description: Here I show how to beat my own game, Save Otto Griffis, my entry to the BaconGameJam08.
---

I recently entered and submitted a game to the
[BaconGameJam08](https://bacongamejam.org/jams/bacongamejam-08/) with my
game [Save Otto Griffis](https://bacongamejam.org/jams/bacongamejam-08/334/).
Here I discuss my game, and show my very own lets' play where you see my beat
the game.

## Let's play of Save Otto Griffis
From seeing others play my game I really got a wake up call. I found that
others played and approached my game quite differently than I had in mind.
Some things were not as obvious as I imagined when designing the game.
(Keep in mind, it was created within 48 hours, so not *that* much thought has
been given to this aspect.)

My strategy is to lurk the zombies down to the white stage, where I like to
keep Otto safe and sound. Then I sprint up on the stage, and kill the zombies
from there. They can still kill you, if you get too close to the border, but
you, the player, actually has a slight larger range of attack than the zombies,
so it is possible to stay in a spot where you can hit them, but they can't hit
you.

<video controls style="width:100%;">
  <source src="/static/media/saveOttoGriffis-letsplay.ogg" type="video/ogg">
  <source src="/static/media/saveOttoGriffis-letsplay.mp4" type="video/mp4">
  Your browser does not support the <code>video</code> element.
</video>

I recorded this video with
[gtk-recordMyDesktop](http://recordmydesktop.sourceforge.net/about.php),
and used `ffmpeg` to add an `.mp4` source (along with original `.ogg` file).
I used the Firefox webbrowser to play the game in the video. Chromium was used
when developing the game.


## Thoughts
So, creating this game and watching others play it has learnt me a few things,
and from the feedback in the comments for example, I am cleverer to as what
works in this game, and what doesn't.

### Negative / improve

 * Confusing that Otto often dies suddenly, if you do not *sprint* down and
   kill the zombies that might have spawned near him.
 * Although it plays smoothely most places I have tested, it *is* resource
   heavy and in a let's play, the game was nearly unplayable when screen-recording was enabled.
 * Written text (font) does not fit visual style. (When I implemented it,
   I didn't have time to draw my own bitmap font.)
 * Still mises some sounds/music (e.g. at gameover/win and menu).

### Positive

 * The music-change when hitting the button seemed cool.
 * I am satisfied with the graphics; given my art-skills and that I am still
   learning the ways of pixel art, I am satisfied with the sprites and visual
   feel of the game.


## What I would like to learn / do better next time
I have some thoughts on what I'd like to experiment with next.

 * Optimization: e.g. only drawing/handling objects within viewport.
 * Be more cleverer about level-design and creation.
 * Write a common framework from the most recent games/experiments that uses
   pixi.js. Especially the `Game` object and an `Entity` super-class with
   commonly used methods and attributes used by all entities.
 * Try creating a mobile-friendly game (touch controls)!