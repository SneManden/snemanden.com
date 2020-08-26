---
Title : BaconGameJam 08
Author: Casper Kehlet Jensen
Description: I am participating in the bacongamejam, the reddit-organized 48 hour game jam.
warning: Døde links!
---

I am in! I hope to participate in the [BaconGameJam](https://bacongamejam.org);
the [reddit](http://reddit.com)-organized 48-hour game jam.
The 8th event (my first!) will take place this weekend, that is from saturday the
18th of october at 00:00 (UTC+1) and 48 hours forwards
(i.e. the night between friday and saturday).

(I do this post in english, since I am participating in an international event.
Also, all times in this post are relative to my local time [copenhagen].)

## Preperation
I can't exactly say that I am prepared for this game jam; actually I participate
in this event to prepare for the game jam
[Ludum Dare](http://ludumdare.com/compo/), in which I have participated before
and followed closely for ~2 years now.

I will most likely create my game in Javascript using HTML5 technology using
either the canvas-2d-context or WebGL for a 3D game. The base of the game will
probably be from some existing game/engine I have used before. If I do 3D
I will use code from my most recent game, [foxescape](/spil/foxescape).
Else, I will probably use something like
[this car game engine](https://github.com/SneManden/carGame) as a base.

My prefered graphics tool is [Paint.NET](http://www.getpaint.net/), but I am on
Linux so I use the slightly more unstable and buggy
[Pinta](http://pinta-project.com/), a Paint.NET open-source clone.

I have very poor experince with sound-effect/music creation, so I'll go for
[sfxr](http://www.drpetter.se/project_sfxr.html) or [bfxr](http://www.bfxr.net/)
for the sound effects and probably use some free background music from around
the web.

## Updates
I plan on using this blogpost for updates, as I progress through the
competition. So stay tuned! You can follow my progress on
[github](https://github.com/SneManden/BaconGameJam08Entry).


### Finished! (24 + 23:55:00)
So, I am out of time! I have just submitted the game here:
[Save Otto Griffis](https://bacongamejam.org/jams/bacongamejam-08/334/).
I will set up the game on my website (so you do not have to download from
[github](https://github.com/SneManden/BaconGameJam08Entry), and then I will go
straight to bed!)

Also, I'd like to give proper attribution to the authors (or license holders)
of the music that I have used in my game:

 * [When I Open My Eyes by unreal_dm (featuring Admiral Bob)](http://dig.ccmixter.org/files/unreal_dm/32234)
 * [DJ Death by Hans Atom (featuring Kara!)](http://dig.ccmixter.org/files/hansatom/34108)

You can play my game at [saveottogriffis.snemanden.com](http://saveottogriffis.snemanden.com/).

![Start screen with instructions and objective](https://raw.githubusercontent.com/SneManden/BaconGameJam08Entry/master/screens/2014-10-19_23:45:00.png "Start screen with instructions and objective")

![Find and press this button, and hell breaks lose!](https://raw.githubusercontent.com/SneManden/BaconGameJam08Entry/master/screens/2014-10-19_23:46:00.png "Find and press this button, and hell breaks lose!")

![Save Otto Griffis (stage performer, in blue) while avoiding/defeating zombie ladies](https://raw.githubusercontent.com/SneManden/BaconGameJam08Entry/master/screens/2014-10-19_23:48:00.png "Save Otto Griffis (stage performer, in blue) while avoiding/defeating zombie ladies")


### You can now win the game! (24h + 17:05:00)
Yes, you read that right! I just added a line of code that checks whether some
condition is fulfilled; if so, you win the game! Well, I must admit, that right
now you get that message through a subtle console-message, and yeah, nothing
else.

I am quickly running out of time, so I should really focus on doing some simple
sound-effects, create the menu/starting screen, create a game-over and a "you
have beat the frickin' game"-screen. Gosh, much to do.

Also, the game is becomming quite heavy. The amount of

    for (var i in this.game.entities)
        // Do something

is greater than I care to admit. (The number of times that I iterate every
entity in the game; sometimes done every frame for every entity...)

But here is the most recent screenshot!

![Yeah, the performer went for the door! Should be save and sound behind that](https://raw.githubusercontent.com/SneManden/BaconGameJam08Entry/master/screens/2014-10-19_17:00:00.png "Yeah, the performer went for the door! Should be save and sound behind that")


### A new character is introduced! (24h + 12:25:00)
So I have spent the first few hours of this day (got out of bed at ~09) by
refining the behaviour of the zombies and: created a new character!
So please welcome the man in blue. He is supposed to be a VIP character, that
the player has to protect; well, that is the plan for now.

![The stage performer is here! And with a fancy shirt too!](https://raw.githubusercontent.com/SneManden/BaconGameJam08Entry/master/screens/2014-10-19_12:19:00.png "The stage performer is here! And with a fancy shirt too!")


### Day 1 over (24h + 02:05:00)
So, that was the first 24 hours! I am not entirely sure that I am happy with
the progress, that I have managed so far. Complaints, complaints...
At least I have not had any serious bugs or problems.

At some point I realized, that the graphics was crisp, and yes, setting the
pixel-scale to "nearest neighbour" fixed that.
Although I can still manage to have a decent framerate with >500 entities,
implementing a naive collision-detection with obstacles will probably have
an impact soon. I guess I use way too much memory and way too ineficient
algorithms, but I can't bother optimizing those things. This is an 48 hour
game, not a Computer Science project!

I cannot really say that I have figured out the story yet. That should be
one of the main goals for tomorrow. And how do you win? Killing all of them?

Here are some screens to show some of the progress I have made:

![New textures](https://raw.githubusercontent.com/SneManden/BaconGameJam08Entry/master/screens/2014-10-18_23:17:30.png "New textures")

![Obstacles, collisions, yeeesss](https://raw.githubusercontent.com/SneManden/BaconGameJam08Entry/master/screens/2014-10-19_01:58:00.png "Obstacles, collisions, yeeesss")

(The zombie closest to the player can not move any further downwards:
it is suppesed to be obscured by the white platform. When I add stairs, that
should be more clear, I hope.)


### Grandma zombies? (19:50:00)
After a ~4 hour break with lots of fresh air and social gardening, I have
returned to the keyboard.

The game will maybe, maybe not feature zombies and/or cute ponies. The story
I'll save for later. But here are some screenshots of the development for the
last few hours:

![Friendly old ladies...](https://raw.githubusercontent.com/SneManden/BaconGameJam08Entry/master/screens/2014-10-18_19:27:00.png "Friendly old ladies...")

![That turn into hostile zombies!](https://raw.githubusercontent.com/SneManden/BaconGameJam08Entry/master/screens/2014-10-18_19:10:00.png "That turn into hostile zombies!")

I'll grab a bite, before I'm at it again...


### It begins (12:05:00)
So I have come up with some vague idea. A hack-n-slash game with lots of enemies
(original, I know).

Not much time to say so much; have been doing simple setup and begun with
animations and player movement.

I will have a break for a few hours and do some gardening: fresh air.

![Just getting started](https://raw.githubusercontent.com/SneManden/BaconGameJam08Entry/master/screens/2014-10-18_10:51:57.png "Just getting started")

![Ooops, saved as low-quality png](https://raw.githubusercontent.com/SneManden/BaconGameJam08Entry/master/screens/2014-10-18_11:57:00.png "Ooops, saved as as low-quality png")

### "Millions of them" (08:10:00)
The theme of this game jam event turned out to be "Millions of them".

I stayed up until midnight, read the theme, brushed my teeth and went to bed.
Now that I am up, I will brainstorm a bit and hopefully soon reach some kind of
conclusion as to what game I am going to make.