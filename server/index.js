/* eslint-env node */
'use strict';

const express = require('express')
const app = express()
const globSync   = require('glob').sync;

const mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
const proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

// Log proxy requests
const morgan = require('morgan');
app.use(morgan('dev'));


mocks.forEach(route => route(app));
proxies.forEach(route => route(app));

app.listen(3001);
