module.exports = function(CONFIG, gulp) {
  const babel = require('gulp-babel');
  const browsersync = require('browser-sync');
  //const eslint = require('gulp-eslint');
  const path = require('path');
  const rename = require('gulp-rename');
  const size = require('gulp-size');

  const srcAll = path.join(CONFIG.PATHS.SRC, CONFIG.PATHS.SCRIPTS, '**/*.js');
  const srcBuild = path.join(CONFIG.PATHS.SRC, CONFIG.PATHS.SCRIPTS, '**/*.build.js');
  const dist = path.join(CONFIG.PATHS.DIST, CONFIG.PATHS.SCRIPTS);

  //gulp.task('lint-scripts', function() {
  //  return gulp.src(srcAll)
  //    .pipe(eslint(CONFIG.ESLINT_OPTIONS))
  //    .pipe(eslint.format());
  //});

  gulp.task('build-scripts', function() {
    return gulp.src(srcBuild)
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(rename(function(path) {
        path.basename = path.basename.replace('.build', '.built');
        return path;
      }))
      .pipe(gulp.dest(dist))
      .pipe(size({ showFiles: true }))
      .pipe(browsersync.reload({ stream: true }));
  });

  gulp.task('watch-scripts', function(cb) {
    gulp.watch(srcAll, gulp.series('build-scripts'));
    cb();
  });
};
