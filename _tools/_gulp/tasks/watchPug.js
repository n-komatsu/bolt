import gulp from 'gulp';
import Registry from 'undertaker-registry';
import config from './config';

class MyTask extends Registry {
  init(gulp) {
    return gulp.task('watchPug', callback => {
      gulp.watch(config.develop.watchPug, gulp.parallel('pugCompile:dev'));
      callback();
    });
  }
}

export default new MyTask();