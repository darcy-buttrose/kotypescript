/**
 * Created by Darcy on 19/06/2015.
 */
var gulp = require('gulp');
var typescript = require('gulp-tsc');
var publish = require('gulp-publish');
var jasmine = require('gulp-jasmine');
var jasmine_spec_reporter = require('jasmine-spec-reporter');
var System = require('systemjs');
require('./config');

gulp.task('compile', function(){
    gulp.src(['./src/**/*.ts'])
        .pipe(typescript({
            "module": "system",
            "target": "es5"
        }))
        .pipe(gulp.dest('build/'))
});

gulp.task('publish', function () {
    gulp.src(['./src/**/*.html'])
        .pipe(publish())
        .pipe(gulp.dest('build/'));
});

gulp.task('test',function() {
    gulp.src(['./build/**/*.spec.js'])
        .pipe(jasmine({
            verbose: true
        }));
});

gulp.task('system',function() {
    System.import('knockout')
    .then(function(loaded) {
        console.log('System - loaded');
    })
    .catch(console.error.bind(console));
    console.log('system - finish');
});

gulp.task('watch', ['compile','publish'], function(){
    gulp.watch('./src/**/*.ts', ['compile']);
    gulp.watch('./src/**/*.html', ['publish']);
});