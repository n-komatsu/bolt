import gulp from 'gulp';
import Registry from 'undertaker-registry';
import config from './config';

class MyTask extends Registry {
  init(gulp) {
    return gulp.task('copyStatics:dev', callback => {
      gulp.src(config.develop.staticsSrc)
          .pipe(gulp.dest(config.develop.staticsOutput));
      callback();
    });
  } 
}

export default new MyTask();