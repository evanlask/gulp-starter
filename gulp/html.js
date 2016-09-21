module.exports = function(CONFIG, gulp) {
  var browsersync = require('browser-sync');
  var htmlmin = require('gulp-htmlmin');
  var path = require('path');
  var size = require('gulp-size');

  var src = path.join(CONFIG.PATHS.SRC, '**/*.html');
  var dist = path.join(CONFIG.PATHS.DIST);

  gulp.task('build-html', function(cb) {
    return gulp.src(src, { since: gulp.lastRun('build-html') })
      .pipe(htmlmin(CONFIG.HTML_MIN_OPTIONS))
      .pipe(gulp.dest(dist))
      .pipe(size({ showFiles: true }))
      .pipe(browsersync.reload({ stream: true }));
  });

  gulp.task('watch-html', function(cb) {
    gulp.watch(src, gulp.series('build-html'));
    cb();
  });
};
