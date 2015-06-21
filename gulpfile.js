/**
 * Created by Darcy on 19/06/2015.
 */
var gulp = require('gulp');

var typescript = require('gulp-tsc');
gulp.task('compile', function(){
    gulp.src(['src/**/*.ts'])
        .pipe(typescript({
            "target": "es5"
        }))
        .pipe(gulp.dest('build/'))
});

var publish = require('gulp-publish');
gulp.task('publish', function () {
    gulp.src(['src/**/*.html'])
        .pipe(publish())
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', ['compile'], function(){
    gulp.watch('src/**', ['compile']);
});