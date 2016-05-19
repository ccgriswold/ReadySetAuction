/* npm install --save-dev pug gulp gulp-sass gulp-babel gulp-babel babel-preset-es2015 gulp-ng-annotate gulp-browser gulp-uglify gulp-pug*/
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var babel       = require('gulp-babel');
var ngAnnotate  = require('gulp-ng-annotate');
var gulpBrowser = require("gulp-browser");
var uglify      = require('gulp-uglify');
// var gulpPug    = require('gulp-pug');
var gulpJade    = require('gulp-jade');
// var duration    = require('gulp-duration');

gulp.task('default', ['html', 'pageviews', 'css', 'js', 'images']);

gulp.task('html', function() {
   return gulp.src('./*.jade')
      .pipe(gulpJade())
      .pipe(gulp.dest('./public/'));
});

gulp.task('pageviews', function() {
   return gulp.src('./pageviews/*.jade')
      .pipe(gulpJade())
      .pipe(gulp.dest('./public/pageviews'));
});

gulp.task('css', function() {
   return gulp.src('./scss/main.scss')
      .pipe(sass())
      .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function() {
   return gulp.src('./js/app.js')
      .pipe(gulpBrowser.browserify())
      // .pipe(duration('browserifying'))
      // .pipe(babel({
      //   presets: ['es2015']
      // }))
      // .pipe(duration('babeling'))
      .pipe(ngAnnotate())
      // .pipe(duration('ngAnnotating'))
      //.pipe(uglify())
      .pipe(gulp.dest('./public/js/'));
});

gulp.task('images', function() {
   return gulp.src('./images/*')
    .pipe(gulp.dest('./public/images/'));
});

gulp.task('watch', function() {
   gulp.watch('./*.jade', ['html']);
   gulp.watch('./pageviews/*.jade', ['pageviews']);
   gulp.watch('./scss/*.scss', ['css']);
   gulp.watch('./js/*.js', ['js']);
   gulp.watch('./images/*', ['images']);
});
