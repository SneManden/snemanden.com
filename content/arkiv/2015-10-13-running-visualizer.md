---
Title : Running visualizer
Author: Casper Kehlet Jensen
Description: A small project for an alternative visualization of workouts (running)
warning: Døde links!
---

After a successful half marathon first Sunday this month, I really came to
realize how much I love and enjoy running. Therefore I wanted to do a small
project based on my workout data that I have gathered over the past year or so.
__runviz__ is a direct consequence of this.

Earlier, I have tinkered with game development, but recently I haven't really
prioritized it &mdash; a development that I'm not entirely satisfied with.
Therefore I decided to combine the two passions and do this small project.

## So, what is it really?
Well, you could go and see for yourself [here](/runviz).
If you are curious about the mechanics and/or maybe trying with your own data,
you are welcome to adapt the [source](https://github.com/SneManden/runviz) to
your needs.

![Screenshot of runviz](/static/img/blogimages/runviz-screenshot.png)

Each workout is represented by a small *runner* (a sprite) that starts at
kilometre zero and runs the distance indicated by the workout, of course
taking speed into account.

## Conclusion
Some parts turned out to be rather challenging. My game development skills are
a bit rusty, and I choose to use [pixi.js](https://github.com/pixijs/pixi.js)
as rendering engine, which is quite bare bones (not a complete game framework,
rather lightweight engine / library).
Also, *Javascript*. Enough said.

I would have liked to add nicer graphics, especially regarding the background
and atmosphere. The background is great, but does not quite have the right
dimensions for a proper parallax scrolling background. More background layers
of varying distances would be awesome.