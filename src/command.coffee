module.exports = ->
  greet = require("../lib/")
  argv = require('minimist')(process.argv.slice(2));

  console.log greet.init(argv._, argv.drink)
  return