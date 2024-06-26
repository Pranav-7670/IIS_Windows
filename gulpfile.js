const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('minify-html', () => {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('minify-html'));
