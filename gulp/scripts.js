// Tasks related to compilation of scripts
module.exports = function(CONFIG, gulp) {
  var taskId = 'scripts';

  // Required modules
  var browsersync = require('browser-sync');
  var concat = require('gulp-concat');
  var es = require('event-stream');
  var filter = require('gulp-filter');
  var path = require('path');
  var rename = require('gulp-rename');
  var size = require('gulp-size');
  var sourcemaps = require('gulp-sourcemaps');
  var uglify = require('gulp-uglify');

  // Paths
  var src = path.join(CONFIG.PATHS.SRC, CONFIG.PATHS.SCRIPTS, '**/*.js');
  var dist = path.join(CONFIG.PATHS.DIST, CONFIG.PATHS.SCRIPTS);

  // Lint scripts
  gulp.task('lint-' + taskId, function(cb) {
    cb();
  });

  // Build all script bundles
  gulp.task(CONFIG.PREFIX_BUILD + taskId, function() {
    // Create a stream for each script bundle
    var streams = CONFIG.SCRIPT_BUNDLES.map(function(bundle) {
      // Update files with SRC path
      var files = bundle.files.map(function(file) {
        return path.join(CONFIG.PATHS.SRC, CONFIG.PATHS.SCRIPTS, file);
      });

      // Start stream
      return gulp.src(files)
        .pipe(sourcemaps.init())
        .pipe(concat(bundle.dest))
        .pipe(uglify(CONFIG.UGLIFY_OPTIONS))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dist))
    });

    // Merge streams in to one
    return es.merge(streams)
      .pipe(size({ showFiles: true }))
      .pipe(filter('**/*.js'))
      .pipe(browsersync.reload({ stream: true }))
  });

  // Watch for script changes
  gulp.task(CONFIG.PREFIX_WATCH + taskId, function(cb) {
    gulp.watch(src, gulp.series(CONFIG.PREFIX_BUILD + taskId));
    cb();
  });
};
