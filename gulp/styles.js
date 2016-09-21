module.exports = function(CONFIG, gulp) {
  var autoprefixer = require('gulp-autoprefixer');
  var browsersync = require('browser-sync');
  var filter = require('gulp-filter');
  var gutil = require('gulp-util');
  var path = require('path');
  var sass = require('gulp-sass');
  var size = require('gulp-size');
  var sourcemaps = require('gulp-sourcemaps');

  var src = path.join(CONFIG.PATHS.SRC, CONFIG.PATHS.STYLES, '**/*.scss');
  var dist = path.join(CONFIG.PATHS.DIST, CONFIG.PATHS.STYLES);

  gulp.task('build-styles', function() {
    return gulp.src(src)
      .pipe(sourcemaps.init())
      .pipe(sass(CONFIG.SASS_OPTIONS).on('error', gutil.log))
      .pipe(autoprefixer(CONFIG.AUTO_PREFIXER_OPTIONS).on('error', gutil.log))
      .pipe(sourcemaps.write('maps'))
      .pipe(gulp.dest(dist))
      .pipe(size({ showFiles: true }))
      .pipe(filter('**/*.css'))
      .pipe(browsersync.reload({ stream: true }));
  });

  gulp.task('watch-styles', function(cb) {
    gulp.watch(src, gulp.series('build-styles'));
    cb();
  });
};
