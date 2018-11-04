import gulp from 'gulp';
import stylus from './tasks/stylus';
import pug from './tasks/pug';
import watchPug from './tasks/watchPug';
import watchStylus from './tasks/watchStylus';
import browser from './tasks/browser'
import copy from './tasks/copy.js';

gulp.registry(stylus);
gulp.registry(pug);
gulp.registry(watchPug);
gulp.registry(watchStylus);
gulp.registry(browser);
gulp.registry(copy);

gulp.task('default', gulp.series('pugCompile:dev', 'stylusCompile:dev', 'copyStatics:dev',  'watchPug', 'watchStylus', 'staticServer:dev'));