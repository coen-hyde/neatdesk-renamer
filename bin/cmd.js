#!/usr/bin/env node

var renamer = require('../')
  , path = require('path')
  , dir = __dirname;

if (typeof process.argv[2] != 'undefined') {
  dir = path.resolve(process.argv[2]);
}

renamer(dir);