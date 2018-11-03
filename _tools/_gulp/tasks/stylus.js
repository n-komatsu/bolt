import config from './config';
import gulp from 'gulp';
import stylus from 'gulp-stylus';
import plumber from 'gulp-plumber';
import Registry from 'undertaker-registry';
import autoPrefixer from 'gulp-autoprefixer';

class MyTask extends Registry {
  init(gulp) {
    gulp.task('stylusCompile:dev', callback => {
      return gulp.src(config.develop.cssSrc)
                  .pipe(plumber())
                  .pipe(stylus({'include css': true}))
                  .pipe(autoPrefixer())
                  .pipe(gulp.dest(config.develop.cssOutput));
                  callback();
    });
  }
}

export default new MyTask();