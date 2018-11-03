import gulp from 'gulp';
import browserSync from 'browser-sync';
import Registry from 'undertaker-registry';
import path from 'path';

class MyTask extends Registry {
  init(gulp) {
    return gulp.task('staticServer:dev', callback => {
      browserSync({
        server: {
          baseDir: path.resolve(__dirname, '../../../_preview'),
          index: 'index.html',
        }
      });
    });
  }
}

export default new MyTask();