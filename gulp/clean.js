module.exports = function(CONFIG, gulp) {
  var del = require('del');
  var path = require('path');

  var dist = path.join(CONFIG.PATHS.DIST, '**/*');

  gulp.task('clean-node', function() {
    return del(['node_modules']);
  });

  gulp.task('clean', function() {
    return del([dist]);
  });
};
