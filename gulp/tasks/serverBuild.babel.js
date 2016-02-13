import gulp from 'gulp';
import webpack from 'gulp-webpack';
import config from '../config';

// タスク名はファイル名と同じにしておくと見通しが良い
gulp.task('serverBuild', () => {
  gulp.src(config.webpack.entry)
  .pipe(webpack(config.serverBuild))
  .pipe(gulp.dest(config.js.dest));
});

