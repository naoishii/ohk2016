import gulp from 'gulp';
import watch from 'gulp-watch';
import config from '../config';

gulp.task('watch', function () {
    // js
    watch(config.watch.js, function () {
        gulp.start(['webpack']);
    });
});
