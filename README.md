# feathers-docker

[![Build Status](https://travis-ci.org/elog08/feathers-docker.png?branch=master)](https://travis-ci.org/elog08/feathers-docker)
[![Code Climate](https://codeclimate.com/github/elog08/feathers-docker/badges/gpa.svg)](https://codeclimate.com/github/elog08/feathers-docker)
[![Test Coverage](https://codeclimate.com/github/elog08/feathers-docker/badges/coverage.svg)](https://codeclimate.com/github/elog08/feathers-docker/coverage)
[![Dependency Status](https://img.shields.io/david/elog08/feathers-docker.svg?style=flat-square)](https://david-dm.org/elog08/feathers-docker)
[![Download Status](https://img.shields.io/npm/dm/feathers-docker.svg?style=flat-square)](https://www.npmjs.com/package/feathers-docker)

> A FeathersJS adapter for the Docker Engine API

## Installation

```
npm install feathers-docker --save
```
## Requirements

Docker v18 Link (https://docs.docker.com/get-started/)


## Documentation

This is a wrapper around the DockerEngine API. 

### Features

#### Actions
- [ ] CRUD Containers
- [ ] CRUD Services

#### Endpoints Supported
- [ ] auth
- [ ] configs
- [ ] containers
- [ ] distribution
- [ ] events
- [ ] exec
- [ ] images
- [ ] index.js
- [ ] info
- [ ] networks
- [ ] node
- [ ] ping
- [ ] plugins
- [ ] secrets
- [ ] services
- [ ] swarm
- [ ] tasks
- [ ] version
- [ ] volumes

## Complete Example

Here's an example of a Feathers server that uses `feathers-docker`. 

```js
const feathers = require('@feathersjs/feathers');
const docker = require('feathers-docker');

// Initialize the application
const app = feathers();

// Initialize the plugin
app.configure(docker());
```

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
