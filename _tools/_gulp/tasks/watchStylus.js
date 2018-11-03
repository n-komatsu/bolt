import gulp from 'gulp';
import Registry from 'undertaker-registry';
import config from './config';

class MyTask extends Registry {
  init(gulp) {
    return gulp.task('watchStylus', callback => {
      gulp.watch(config.develop.watchCss, gulp.parallel('stylusCompile:dev'));
      callback();
    });
  }
}

export default new MyTask();