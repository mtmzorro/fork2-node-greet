#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var greet = require('../index.js');

greet.init(argv._, argv.drink);


