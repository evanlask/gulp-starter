module.exports = function(CONFIG, gulp) {
  const del = require('del');
  const path = require('path');

  const dist = path.join(CONFIG.PATHS.DIST, '**/*');

  gulp.task('clean-node', function() {
    return del(['node_modules']);
  });

  gulp.task('clean', function() {
    return del([dist]);
  });
};
