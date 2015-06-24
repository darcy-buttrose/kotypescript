/**
 * Created by Darcy on 19/06/2015.
 */
var gulp = require('gulp');
var typescript = require('gulp-tsc');
var publish = require('gulp-publish');

gulp.task('compile', function(){
    gulp.src(['./src/**/*.ts'])
        .pipe(typescript({
            "target": "es5"
        }))
        .pipe(gulp.dest('build/'))
});

gulp.task('publish', function () {
    gulp.src(['./src/**/*.html'])
        .pipe(publish())
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', ['compile','publish'], function(){
    gulp.watch('./src/**/*.ts', ['compile']);
    gulp.watch('./src/**/*.html', ['publish']);
});