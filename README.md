Tim's Node.js Tutorial for HackSoc, University of Nottingham
============================================================

My Node.js template with Bootstrap 3.

Prerequisites
-------------

- Node.js
- Foreman
- Nodemon
- Heroku Toolbelt
- MongoDB
- MySQL
- PostreSQL

## OSX
Using [a package](http://nodejs.org/#download)

> Simply [download Macintosh Installer](http://nodejs.org/#download).

Using [homebrew](https://github.com/mxcl/homebrew):

    brew install node

Using [macports](http://www.macports.org/):

    port install nodejs  

## Windows
Using [a package](http://nodejs.org/#download)

> Simply [download Windows Installer](http://nodejs.org/#download).

Using [chocolatey](http://chocolatey.org) to install [Node](http://chocolatey.org/packages/nodejs):  

    cinst nodejs  

or for [full install with NPM](http://chocolatey.org/packages/nodejs.install):  

    cinst nodejs.install

## Ubuntu

Obtaining a recent version of Node or installing on older Ubuntu and other apt-based distributions may require a few extra steps. Example install:

    sudo apt-get update
    sudo apt-get install -y python-software-properties python g++ make
    sudo add-apt-repository -y ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

It installs current stable Node on the current stable Ubuntu. Quantal (12.10) users may need to install the *software-properties-common* package for the `add-apt-repository` command to work: `sudo apt-get install software-properties-common`

As of Node.js v0.10.0, the nodejs package from [Chris Lea](https://chrislea.com/2013/03/15/upgrading-from-node-js-0-8-x-to-0-10-0-from-my-ppa/)'s repo includes both npm and nodejs-dev.

There is a naming conflict with the node package (Amateur Packet Radio Node Program), and the nodejs binary has been renamed from `node` to `nodejs`. You'll need to symlink `/usr/bin/node` to `/usr/bin/nodejs` (run `ln -s /usr/bin/node /usr/bin/nodejs`) or you could uninstall the Amateur Packet Radio Node Program to avoid that conflict.



Set up
------

Run app.js with node.


