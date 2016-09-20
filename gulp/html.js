module.exports = function(CONFIG, gulp) {
  const browsersync = require('browser-sync');
  const htmlmin = require('gulp-htmlmin');
  const path = require('path');
  const size = require('gulp-size');

  const src = path.join(CONFIG.PATHS.SRC, '**/*.html');
  const dist = path.join(CONFIG.PATHS.DIST);

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
