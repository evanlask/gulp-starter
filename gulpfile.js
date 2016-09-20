const CONFIG = require('./build-config');
const gulp = require('gulp');

require('./gulp/html')(CONFIG, gulp);
require('./gulp/styles')(CONFIG, gulp);
require('./gulp/serve')(CONFIG, gulp);
require('./gulp/media')(CONFIG, gulp);
require('./gulp/clean')(CONFIG, gulp);
