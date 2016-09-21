module.exports = function(CONFIG, gulp) {
  var buildTasks = ['clean'];
  var watchTasks = [];

  for(var taskName in gulp._registry._tasks) {
    if(taskName.indexOf('build-') >= 0) {
      buildTasks.push(taskName);
    } else if (taskName.indexOf('watch-') >= 0) {
      watchTasks.push(taskName);
    }
  }

  gulp.task('build', gulp.series.apply(this, buildTasks));
  gulp.task('watch', gulp.series.apply(this, watchTasks));
};
