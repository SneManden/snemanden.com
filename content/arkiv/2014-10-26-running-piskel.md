---
Title : Running piskel
Author: Casper Kehlet Jensen
Description: How I got to run Piskel on Linux (Ubuntu 14.04)
---

So, I recently heard of this webapp for pixel art and animation,
[Piskel](http://www.piskelapp.com/), and I had a few spare minutes,
so I tried to run it as a desktop application too &mdash;
just for the heck of it.
(Of course it should be noted, that I could still
just use the app in the browser, no problem there.)

However, when trying to run the executable downloaded from
[Piskel: desktop applications](https://github.com/juliandescottes/piskel/wiki/Desktop-applications),
I got the following error:

    ./piskel: error while loading shared libraries: libudev.so.0:
    cannot open shared object file: No such file or directory

Well, so I *had* udev installed (I was able to `find` it in various paths)
I didn't know immediately what to do. I tried copying and/or symlinking those
files between various places in my `/usr/share` but it didn't work.

However, a quick result from the vast Internet yield
[this result](https://github.com/rogerwang/node-webkit/wiki/The-solution-of-lacking-libudev.so.0).

As I didn't understand the bash-file corresponding to the first solution
(at first glance) I skipped that.

The second was just to apply the following command

    sed -i 's/udev\.so\.0/udev.so.1/g' piskel

Hmm, what does it do? Apparently it modifies the binary itself, replacing
any reference to `udev.so.0` by `udev.so.1`
(that's the regular expression part)! And it turned out to work out!
First time I ever used `sed`. Awesome.

Now I will check out this app, and see whether it can compete with
Pinta and Kolourpaint, which are my prefered graphics tools.
(The best tool that worked for me is Paint.NET, and remember: I'm on Linux.)