module.exports = function(CONFIG, gulp) {
  gulp.task('dev', gulp.series(
    'build',
    'serve',
    'watch'
  ));
};
