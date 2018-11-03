import gulp from 'gulp';
import Registry from 'undertaker-registry';
import pug from 'gulp-pug';
import config from './config';

class MyTask extends Registry {
  init(gulp) {
    return gulp.task('pugCompile:dev', callback => {
      gulp.src(config.develop.pugSrc)
          .pipe(pug())
          .pipe(gulp.dest(config.develop.pugOutput));
      callback();
    });
  }
}

export default new MyTask();