module.exports = function(CONFIG, gulp) {
  const browsersync = require('browser-sync');
  //const imagemin = require('gulp-imagemin');
  const path = require('path');
  const size = require('gulp-size');

  const src = path.join(CONFIG.PATHS.SRC, CONFIG.PATHS.MEDIA, '**/*');
  const dist = path.join(CONFIG.PATHS.DIST, CONFIG.PATHS.MEDIA);

  gulp.task('build-media', function() {
    return gulp.src(src, { since: gulp.lastRun('build-media') })
      //.pipe(imagemin(CONFIG.IMAGEMIN_OPTIONS))
      .pipe(gulp.dest(dist))
      .pipe(size({ showFiles: true }))
      .pipe(browsersync.reload({ stream: true }));
  });

  gulp.task('watch-media', function(cb) {
    gulp.watch(src, gulp.series('build-media'));
    cb();
  });
};
