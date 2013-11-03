# Hipster Development with Node.js

## Contents

- What is Node.js and why should I care?
- How do I follow this tutorial?
- What software do I need to install?
- Cool. How do install that exactly?
- I'm completely new to programming, help?

## What is Node.js and why should I care?

> Lets face it nodejs is trendy. I cloned the repo & instantly found myself moustached, in a coffee shop listening 2 music that isnt even out.

Node.js has become hugely popular recently (and for good reason). It is a server-side platform for writing web applications in JavaScript. It's fast, scalable, fully non-blocking, and 100% pure unadulterated JS. Here are some of the reasons Node.js is getting so popular:

- It's fast.

	Node is built on [Google's V8 Engine](http://code.google.com/p/v8/). Google made this lightning fast VM because they wanted to [improve JavaScript in Chrome](http://blogoscoped.com/google-chrome/). It is written in C++ and as a result Node is very fast, smashing Python and Ruby.

- It's non-blocking.

	Non-blocking I/O means that Node is perfect for real-time applications like games, chat servers, news streams. Non-blocking I/O makes your app faster and more scalable. Python and Ruby have libraries for non-blocking I/O (twisted and EventMachine) but blocking libraries can clash with these. Node is entirely non-blocking from the ground up. And all of its packages are non-blocking too. 

- It's scalable.

	The non-blocking nature means Node can easily handle many connections at once. 

- It's in JavaScript.

	Every web developer knows JavaScript, so it's easy for people to get on board. Using JavaScript in the back end means it's possible to use a full JS stack. No more switching between languages, everything's in JavaScript. JavaScript's event-driven style is perfect for building non-blocking apps. It also has first-class functions, closures, dynamic typing, and JSON - all pretty awesome things.

- It has fantastic packages and a great community.

	Node comes with the *Node Package Manager* (or *npm*). This makes it ridiculousy easy to add 100s of modules to your code, all written by a large and active community.

- It's great for rapid prototyping.

	Once you get the hang of it, It's quick and easy to set up an app using Node. This makes it great for hackathons.

## How do I follow this tutorial?

This tutorial is split into chapters. And each chapter has two branches in git. You can get the starting code for a chapter by checking out that chapter's starting branch. You can get the final code for a chapter by checking out that chapter's final branch. If you want to follow along with chapter2:

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

- Learning Objectives:

	We set up a simple HTTP server using Node's built in `http` module and teach it to sing us a song.

#### Chapter 1: Daisy, Daisy.

- Branches:

	`chapter1-start`

	`chapter1-final`
	
- Topic:

	We set up a simple HTTP server using Node's built in `http` module and teach it to sing us a song.

- Learning Objectives:

	We set up a simple HTTP server using Node's built in `http` module and teach it to sing us a song.

#### Chapter 1: Daisy, Daisy.

- Branches:

	`chapter1-start`

	`chapter1-final`
	
- Topic:

	We set up a simple HTTP server using Node's built in `http` module and teach it to sing us a song.

- Learning Objectives:

	We set up a simple HTTP server using Node's built in `http` module and teach it to sing us a song.

#### Chapter 1: Daisy, Daisy.

- Branches:

	`chapter1-start`

	`chapter1-final`
	
- Topic:

	We set up a simple HTTP server using Node's built in `http` module and teach it to sing us a song.

- Learning Objectives:

	We set up a simple HTTP server using Node's built in `http` module and teach it to sing us a song.

## What software do I need to install?

- Node.js
- Foreman
- Nodemon
- Heroku Toolbelt
- MongoDB
- MySQL
- PostreSQL

## Cool. How do install that exactly?

### Ubuntu

You should add Chris Lea's repository then install `nodejs` using apt. Example install:

    sudo apt-get update
    sudo apt-get install -y python-software-properties python g++ make
    sudo add-apt-repository -y ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs
	ln -s /usr/bin/nodejs /usr/bin/node

This will install the current stable Node. Quantal (12.10) users may need to install the *software-properties-common* package for the `add-apt-repository` command to work: `sudo apt-get install software-properties-common`

There is a naming conflict with the node package (Amateur Packet Radio Node Program), and the nodejs binary has been renamed from `node` to `nodejs`. You'll need to symlink `/usr/bin/node` to `/usr/bin/nodejs` (`ln -s /usr/bin/nodejs /usr/bin/node`) or you could first uninstall the Amateur Packet Radio Node Program to avoid that conflict (`sudo apt-get --purge remove node`).

### OSX
Using [a package](http://nodejs.org/#download)

> Simply [download Macintosh Installer](http://nodejs.org/#download).

Using [homebrew](https://github.com/mxcl/homebrew):

    brew install node

Using [macports](http://www.macports.org/):

    port install nodejs  

### Windows

Simply [download Windows Installer](http://nodejs.org/#download).

### Other Systems and Building from Source

Installation instructions for other systems can be found [here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager). You can find instructions on building from source [here](https://github.com/joyent/node/wiki/Installation).

