var gulp = require('gulp');
var sass = require('gulp-sass');
var mocha = require('gulp-mocha');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

gulp.task('style', function() {
  gulp.src('client/**/*scss', {base: 'client/assets/css'})
    .pipe(sass())
    .pipe(gulp.dest('client/assets/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('supertest', function() {
  gulp.src('spec/heartbeattest.js')
  .pipe(mocha());
});

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: 'http://localhost:3000',
    port: 7000
  });
  gulp.watch('backend/*.js', ['supertest']);
  gulp.watch('client/**/*scss', ['style']);
});

gulp.task('nodemon', function() {
  nodemon({script: 'serverinit.js'}).on('start');
});

gulp.task('default', ['nodemon', 'supertest', 'browserSync']);
