# Hipster Development with Node.js

## Contents

- What is Node.js and why should I care?
- How do I follow this tutorial?
- What software do I need to install?
- Cool. How do install that exactly?
- I'm completely new to programming, help?

## What is Node.js and why should I care?

## How do I follow this tutorial?

This tutorial is split into chapters. And Each chapter has two branches in git. You can get the starting code for a chapter by checking out that chapter's starting branch. You can get the final code for a chapter by checking out that chapter's final branch. If you want to follow along with chapter2:

	git checkout chapter2-start

Then you can follow along and make changes to this branch. Feel free to commit your changes:

	git add .
	git commit -m "My commit message"

or discard them:

	git checkout -- .

If you want to see what the finished product should look like:

	git checkout chapter2-final

### List of Chapters

#### Chapter 1

- Branches:

	`chapter1-start`

	`chapter1-final`
	
- Topic:

	We set up a simple HTTP server using Node's built in `http` package and serve "Hello world!" to the browser.

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

Set up
------

Run app.js with node.


