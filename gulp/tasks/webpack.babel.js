import gulp from 'gulp';
import webpack from 'gulp-webpack';
import config from '../config';

// タスク名はファイル名と同じにしておくと見通しが良い
gulp.task('webpack', () => {
  gulp.src(config.webpack.entry)
  .pipe(webpack(config.webpack))
  .pipe(gulp.dest(config.js.dest));
});
