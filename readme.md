# AIM [![Build status](https://travis-ci.org/pablopunk/aim.svg?branch=master)](https://travis-ci.org/pablopunk/aim)

> Shoot the targets.

## Dev

```
$ npm install    # install dependencies
$ npm run dev    # build while watching for file changes
$ npm start      # start a server
$ npm test       # lint and test
```

## Build

```
$ npm run build  # build project into dist/
```

## Deploy

```
$ now dist       # example of deployment using `now.sh`

# How I get it into production (deploy + alias)
$ now dist | xargs -I{} now alias {} aim
```
