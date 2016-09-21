module.exports = function(CONFIG, gulp) {
  var browsersync = require('browser-sync');
  var path = require('path');
  var rename = require('gulp-rename');
  var size = require('gulp-size');

  var srcAll = path.join(CONFIG.PATHS.SRC, CONFIG.PATHS.SCRIPTS, '**/*.js');
  var srcBuild = path.join(CONFIG.PATHS.SRC, CONFIG.PATHS.SCRIPTS, '**/*.build.js');
  var dist = path.join(CONFIG.PATHS.DIST, CONFIG.PATHS.SCRIPTS);

  gulp.task('lint-scripts', function(cb) {
    cb();
  });

  gulp.task('build-scripts', gulp.series('lint-scripts', function(cb) {
    cb()
  }));

  gulp.task('watch-scripts', function(cb) {
    gulp.watch(srcAll, gulp.series('build-scripts'));
    cb();
  });
};
