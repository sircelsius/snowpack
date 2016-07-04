# Contributing

## Dependencies

In order to contribute to Snowpack, you will need Docker. If you don't know Docker, read the docs [here](https://docs.docker.com/).

### Without Docker

If you really do not want to use Docker, you will need to install the following global dependencies with `npm`

```` bash
npm install -g webpack webpack-dev-server karma phantomjs
````

## Dev server

Once you have installed Docker, starting a local server is as easy as running `docker-compose up`. `localhost:8080` will now run the mini-site available at [sircelsius.github.io/snowpack](sircelsius.github.io/snowpack).

If you're running without Docker, install dependencies with `npm install`, then start your dev server with `node server/index.js`.

## File structure

The source code is included in [`./src/lib`](src/lib).

The main entry point is [`./src/lib/index.js`](src/lib/index.js).