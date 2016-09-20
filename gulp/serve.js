module.exports = function(CONFIG, gulp) {
  const browsersync = require('browser-sync');

  gulp.task('serve', function(cb) {
    browsersync.init({
      server: {
        baseDir: [CONFIG.PATHS.DIST]
      },
      ghostMode: false
    }, cb);
  });
};
