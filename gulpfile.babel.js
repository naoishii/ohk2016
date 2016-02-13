import requireDir from 'require-dir';
import webserver from 'gulp-webserver';
import sequence from 'run-sequence';
import gulp from 'gulp';
import livereload from 'connect-livereload';

let server;

requireDir('./gulp/tasks', { recurse: true });


gulp.task('dev', function() {
  sequence('watch');
});

const serve = function(isTest) {
  process.on('uncaughtException', function(err) {
    if (err.errno === 'EADDRINUSE') {
      gutil.log('Server already running (or port is otherwise in use)');
    }
  });

  server = gulp.src('.')
  .pipe(webserver({
    host: '0.0.0.0',
    livereload: {
      enable: !isTest,
      filter: function(filename) {
        return filename.match(/build|demo/);
      }
    },
    middleware: livereload(),
    open: isTest ? false : 'http://localhost:8000/index.html',
    directoryListing: true
  }));
};

gulp.task('serve', function() {
  serve(false);
});

gulp.task('serve:test', function() {
  serve(true);
});

gulp.task('serve:stop', function() {
  if (server) {
    try {
      server.emit('kill');
    } catch (e) {} // eslint-disable-line no-empty
    gutil.log('Web server stopped');
  }
});
