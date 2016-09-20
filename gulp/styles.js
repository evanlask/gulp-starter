module.exports = function(CONFIG, gulp) {
  const autoprefixer = require('gulp-autoprefixer');
  const browsersync = require('browser-sync');
  const filter = require('gulp-filter');
  const gutil = require('gulp-util');
  const path = require('path');
  const sass = require('gulp-sass');
  const size = require('gulp-size');
  const sourcemaps = require('gulp-sourcemaps');

  const src = path.join(CONFIG.PATHS.SRC, CONFIG.PATHS.STYLES, '**/*.scss');
  const dist = path.join(CONFIG.PATHS.DIST, CONFIG.PATHS.STYLES);

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
