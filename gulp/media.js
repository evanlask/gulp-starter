module.exports = function(CONFIG, gulp) {
  var browsersync = require('browser-sync');
  //var imagemin = require('gulp-imagemin');
  var path = require('path');
  var size = require('gulp-size');

  var src = path.join(CONFIG.PATHS.SRC, CONFIG.PATHS.MEDIA, '**/*');
  var dist = path.join(CONFIG.PATHS.DIST, CONFIG.PATHS.MEDIA);

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
