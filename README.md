# Hipster Development with Node.js

This is a taster of Node.js. It doesn't include everything you need to know, but I hope it will give you a good impression of why Node is so powerful. It would help if you're already confident with JavaScript. New to JavaScript? [Check this out](http://www.codecademy.com/tracks/javascript) or [this](http://eloquentjavascript.net/contents.html).

## Contents

- [What is Node.js and why should I care?](#what-is-nodejs-and-why-should-i-care)
- [How do I follow this tutorial?](#how-do-i-follow-this-tutorial)
- [What software do I need to install?](#what-software-do-i-need-to-install)
- [Cool. How do I install that exactly?](#cool-how-do-i-install-that-exactly)
- [How can I learn more about Node?](#how-can-i-learn-more-node)

## What is Node.js and why should I care?

> Lets face it nodejs is trendy. I cloned the repo & instantly found myself moustached, in a coffee shop listening 2 music that isnt even out.
>
> [@DanEzekiel](https://twitter.com/DanEzekiel)

Node.js has become hugely popular recently (and for good reason). It is a server-side platform for writing web applications in JavaScript. It's fast, scalable, fully non-blocking, and 100% pure unadulterated JS. Here are some of the reasons Node.js is getting so popular:

- **It's fast.**

	Node is built on [Google's V8 Engine](http://code.google.com/p/v8/). Google made this lightning fast VM because they wanted to [improve JavaScript in Chrome](http://blogoscoped.com/google-chrome/). It is written in C++ and as a result Node is very fast, smashing [Python](http://benchmarksgame.alioth.debian.org/u32/which-programs-are-fastest.php?), [Ruby](http://www.techempower.com/benchmarks/), and (of course) [PHP](http://jaxbot.me/articles/benchmarks_nodejs_vs_go_vs_php_3_14_2013).

- **It's non-blocking.**

	[Non-blocking I/O](http://en.wikipedia.org/wiki/Asynchronous_I/O) means that Node is perfect for real-time applications like games, chat servers, news streams. Non-blocking I/O makes your app faster and more scalable. Python and Ruby both have libraries for non-blocking I/O ([Twisted](http://twistedmatrix.com/trac/) and [EventMachine](https://github.com/eventmachine/eventmachine) respectively) but their blocking libraries can clash with them. Node is entirely non-blocking from the ground up. And all of its packages are non-blocking too. 

- **It's scalable.**

	The non-blocking nature means Node can easily handle [many connections at once](http://blog.caustik.com/2012/08/19/node-js-w1m-concurrent-connections/). 

- **It's in JavaScript.**

	Every web developer knows JavaScript, so it's easy for people to get on board. Using JavaScript in the back end means it's possible to use a full JS stack (e.g. the [MEAN stack](http://www.mean.io/)). No more switching between languages, everything's in JavaScript. JavaScript's event-driven style is perfect for building non-blocking apps. It also has first-class functions, closures, dynamic typing, and JSON - all pretty awesome things.

- **It has fantastic packages and a great community.**

	Node comes with the *Node Package Manager* (or *npm*). This makes it ridiculousy easy to add 100s of modules to your code, all written by a large and active community.

- **It's great for rapid prototyping.**

	Once you get the hang of it, It's quick and easy to set up an app using Node. This makes it great for hackathons.

Want more details on why you should be excited? Check out these Quora topics [here](http://www.quora.com/Node-js/Why-is-Node-js-becoming-so-popular) and [here](http://www.quora.com/Why-choose-Node-js-for-web-applications). Node has been used by some big companies such as Microsoft, PayPal, LinkedIn, and Yahoo! so it's gaining corporate recognition.

## How do I follow this tutorial?

You should start by cloning this repository:

	git clone git@github.com:TimFogarty/HackSocNodeTutorial.git

This tutorial is split into chapters. And each chapter has two branches in git. You can get the starting code for a chapter by checking out that chapter's starting branch. You can get the final code for a chapter by checking out that chapter's final branch. For example, if you want to follow along with chapter2:

	git checkout chapter2-start

Then you can follow along and make changes to this branch. Feel free to commit your changes:

	git add .
	git commit -m "My commit message"

or discard them:

	git checkout -- .

If you want to see what the finished product should look like:

	git checkout chapter2-final

### List of Chapters

#### Chapter 1: Daisy, Daisy.

- Branches:

	`chapter1-start`

	`chapter1-final`
	
- Topic:

	We set up a simple HTTP server using Node's built in `http` module and teach it to sing us a song.

- We'll learn:

	Introduction to loading modules. How to set up a basic HTTP server. How to run a node app.

#### Chapter 2: This isn't Minecraft.

- Branches:

	`chapter2-start`

	`chapter2-final`
	
- Topic:

	We explore the benefits of non-blocking (asynchronous) I/O.

- We'll learn:

	How callbacks work. The event loop.

#### Chapter 3: All Onboard the Node Express.

- Branches:

	`chapter3-start`

	`chapter3-final`
	
- Topic:

	Using the Express.js framework, we set up routes and serve static files.

- We'll learn:

	Exporting and requiring our own modules. Setting up Express. Serving static html.

#### Chapter 4: <% include template %>

- Branches:

	`chapter4-start`

	`chapter4-final`
	
- Topic:

	We look at using ejs with Node. But Node can use pretty much any templating engine: Jade, mustache, etc.

- We'll learn:

	Rendering templates. Passing variables to templates.

#### Chapter 5: Plug in Baby.

- Branches:

	`chapter5-start`

	`chapter5-final`
	
- Topic:

	We use socket.io to create a web app for the European Space Agency.

- We'll learn:

	How to set up socket.io. How to emit events and listen for them using sockets.

#### Chapter 6: This chapter should really have databases in it. meh.

- Branches:

	`chapter6-start`

	`chapter6-final`
	
- Topic:

	We improve our web app by saving data in sockets.

- We'll learn:

	How to save data on client and server.

#### Chapter 7: Heroku.

- Branches:

	`chapter7-start`

	`chapter7-final`
	
- Topic:

	Set up database and deploy to Heroku!

- We'll learn:

	MongoDB and mongoose. package.json and Procfiles.

## What software do I need to install?

### Necessary

- Node.js

### Helpful

- Nodemon

### If you want to deploy

- Foreman
- Heroku Toolbelt

### If you want to use a database

- MongoDB (Postgres and Redis are also commonly used with Node)

## Cool. How do I install that exactly?

### Node.js

#### Ubuntu

You should add Chris Lea's repository then install `nodejs` using apt. Example install:

    sudo apt-get update
    sudo apt-get install -y python-software-properties python g++ make
    sudo add-apt-repository -y ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs
	ln -s /usr/bin/nodejs /usr/bin/node

This will install the current stable Node. Quantal (12.10) users may need to install the *software-properties-common* package for the `add-apt-repository` command to work: `sudo apt-get install software-properties-common`

There is a naming conflict with the node package (Amateur Packet Radio Node Program), and the nodejs binary has been renamed from `node` to `nodejs`. You'll need to symlink `/usr/bin/node` to `/usr/bin/nodejs` (`ln -s /usr/bin/nodejs /usr/bin/node`) or you could first uninstall the Amateur Packet Radio Node Program to avoid that conflict (`sudo apt-get --purge remove node`).

#### OSX
Using [a package](http://nodejs.org/#download)

> Simply [download Macintosh Installer](http://nodejs.org/#download).

Using [homebrew](https://github.com/mxcl/homebrew):

    brew install node

Using [macports](http://www.macports.org/):

    port install nodejs  

#### Windows

Simply [download Windows Installer](http://nodejs.org/#download).

#### Other Systems and Building from Source

Installation instructions for other systems can be found [here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager). You can find instructions on building from source [here](https://github.com/joyent/node/wiki/Installation).

### Nodemon

`sudo npm install -g nodemon`

## How can I learn more about node?

- [Art of Node](https://github.com/maxogden/art-of-node)
- [Learn You the Node.js for Much Win](https://github.com/rvagg/learnyounode#learn-you-the-nodejs-for-much-win)
- [Stream Adventure](https://github.com/substack/stream-adventure)
- [The Node Beginner Book](http://www.nodebeginner.org/)
- Look at other people's apps no GitHub.
