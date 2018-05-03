let gulp = require('gulp');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');

gulp.task('css', function() {
  return gulp.src('./src/*.css')
    .pipe(concat('all.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    return gulp.watch('./src/*.css', ['css']);
});

gulp.task('teste', function(){
    console.log('funcionou');
});

gulp.task('oi', function(){
    console.log('Oi!');
});

gulp.task('default', ['teste', 'oi', 'css', 'watch']);