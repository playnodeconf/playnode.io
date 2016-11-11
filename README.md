# playnode.io 

playnode.io is playnode official web site.

## Building

Developers can easily build using NPM and gulp.

### Requirements

Before you can build and test, you must install and configure the following products on your development machine:

- [Node.js](http://nodejs.org)
- [NPM](https://www.npmjs.com)

### Installing NPM Modules

Install the nodejs packages needed to build and test

###gs Step1. globally installing package as follows:

````
npm install -g gulp or sudo npm install -g gulp
````

### Step2. Install adn update project dependencies as follows:

````
npm install
npm update

````

### Development

Next, Simply use `gulp dev` during development.

````
gulp dev
````

## Release

production build + gh-pages branch push (only build directory)

````
gulp release
````


## Contributing

We welcome contributions of all kinds from anyone. We're actively looking for more contributors.

Please See also [guidelines for contributing](https://github.com/playnodeconf/playnode.io/blob/master/CONTRIBUTING.md).

## License

Powered by playnodeconf  © 2015. Code licensed under the MIT. [See the detail](https://github.com/playnodeconf/playnode.io/blob/master/LICENSE)

Documentation licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/).
