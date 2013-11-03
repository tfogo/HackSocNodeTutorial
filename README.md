Tim's Node.js Tutorial for HackSoc, University of Nottingham
============================================================

My Node.js template with Bootstrap 3.

## Prerequisites

- Node.js
- Foreman
- Nodemon
- Heroku Toolbelt
- MongoDB
- MySQL
- PostreSQL

## Installing Node

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


