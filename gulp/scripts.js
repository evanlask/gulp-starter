// Tasks related to compilation of scripts
module.exports = function(CONFIG, gulp) {
  var taskId = 'scripts';

  // Required modules
  var browsersync = require('browser-sync');
  var path = require('path');
  var rename = require('gulp-rename');
  var size = require('gulp-size');

  // Paths
  var srcAll = path.join(CONFIG.PATHS.SRC, CONFIG.PATHS.SCRIPTS, '**/*.js');
  var srcBuild = path.join(CONFIG.PATHS.SRC, CONFIG.PATHS.SCRIPTS, '**/*.build.js');
  var dist = path.join(CONFIG.PATHS.DIST, CONFIG.PATHS.SCRIPTS);

  // Lint scripts
  gulp.task('lint-' + taskId, function(cb) {
    cb();
  });

  // Build scripts
  gulp.task(CONFIG.PREFIX_BUILD + taskId, gulp.series('lint-scripts', function(cb) {
    cb()
  }));

  // Watch for script changes
  gulp.task(CONFIG.PREFIX_WATCH + taskId, function(cb) {
    gulp.watch(srcAll, gulp.series(CONFIG.PREFIX_BUILD + taskId));
    cb();
  });
};
