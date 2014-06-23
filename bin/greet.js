#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var greet = require('../index.js');

// console.log(argv);  
console.log(greet.init(argv._, argv.drink));


