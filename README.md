# [Most Reliable Lightweight CSS Reset™](https://resir014.github.io/Reliable-Lightweight-CSS-Reset/)

> CSS Resets are stupidly long. It’s time to make it simpler.

## FAQ

### Why did you make this?

There has been a [long-brewing battle](http://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css) between users of `normalize.css` and `reset.css` over which ones work the best for development. Even though both of them work well in making websites render consistently on all browsers and operating systems, I find them both to be lacking in one aspect: **size**.

Some of them argue that one works better than the other because it's more lightweight in size, which helps in performance, but the main problem is: they are both **fucking huge**.

Most Reliable Lightweight CSS Reset (MRLCR) solves the above issue by going the extra mile in compactness with a solution that *just works*.

### Seriously. *Why* did you make this?

I originally made this as a [joke Tumblr post](http://resir014.tumblr.com/post/91331438337) with the same idea as explained above. I ended up setting up a GitHub repo for it, because hey, some of you might be into this, so why the hell not.

I even went on to set up a bower package for it, because some of you are pretty into it these days.

### What does this contain?

In its entirety, MRLCR contains the following:

```css
* {
  margin: 0;
  padding: 0;
}
```

### I don't like the way you did `{x,y,z}`!

Then feel free to change it as you like. MRLCR is licensed in WTFPL so that the possibilities to do whatever you want with it are endless, and because real freedom tastes much better than [Freedom™](https://www.youtube.com/watch?v=PaKIZ7gJlRU).

## Installation

### npm

```sh
$ npm install --save reliable-lightweight-css-reset
```

### Bower

```sh
$ bower install reliable-lightweight-css-reset
```

### The old way

Just download the thing and place it inside your working directory. Was that so hard?

## License

[WTFPL.](https://github.com/resir014/Reliable-Lightweight-CSS-Reset/blob/master/LICENSE)
