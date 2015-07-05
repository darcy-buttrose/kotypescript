/**
 * Created by Darcy on 19/06/2015.
 */
var gulp = require('gulp');
var typescript = require('gulp-tsc');
var publish = require('gulp-publish');
var jasmine = require('gulp-jasmine');
var jasmine_spec_reporter = require('jasmine-spec-reporter');
var System = require('systemjs');

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
    System.config({
        "baseURL": "/build",
        "defaultJSExtensions": true,
        "transpiler": "traceur",
        "paths": {
            "github:*": "/jspm_packages/github/*",
            "npm:*": "/jspm_packages/npm/*"
        },
        "map": {
            "knockout": "npm:knockout@3.3.0",
            "npm:knockout@3.3.0": {
                "process": "github:jspm/nodelibs-process@0.1.1"
            },
            "github:jspm/nodelibs-process@0.1.1": {
                "process": "npm:process@0.10.1"
            },
        }
    });
    gulp.src(['./build/**/*.spec.js'])
        .pipe(jasmine({
            verbose: true
        }));
});

gulp.task('system',function() {
    System.config({
        "baseURL": "/build",
        "defaultJSExtensions": true,
        "transpiler": "traceur",
        "paths": {
            "github:*": "/jspm_packages/github/*",
            "npm:*": "/jspm_packages/npm/*"
        },
        "map": {
            "knockout": "npm:knockout@3.3.0",
            "npm:knockout@3.3.0": {
                "process": "github:jspm/nodelibs-process@0.1.1"
            },
            "github:jspm/nodelibs-process@0.1.1": {
                "process": "npm:process@0.10.1"
            },
        }
    });
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