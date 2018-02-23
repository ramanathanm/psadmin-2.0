process.env.NODE_ENV = 'test';

require('babel-register')();

require.extensions['.css'] = () => null;
require.extensions['.png'] = () => null;
require.extensions['.jpg'] = () => null;

var jsdom = require('jsdom').jsdom;

