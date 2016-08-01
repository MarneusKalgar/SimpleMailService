var gulp = require("gulp");
var server = require("gulp-server-livereload");
var stylus = require("gulp-stylus");
var prefix = require("gulp-autoprefixer");
var wiredep = require('wiredep').stream;

var useref = require('gulp-useref');
var gulpif = require('gulp-if');
//var uglify = require('gulp-uglify');
//var minifyCss = require('gulp-minify-css');

var buildDir = 'build';
var outputDir = 'dist';

gulp.task('build', function () {
    return gulp.src(buildDir + '/*.html')
        //.pipe(useref())
        //.pipe(gulpif('*.js', uglify()))
        //.pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest(outputDir));
});


gulp.task('bower', function () {
  gulp.src(buildDir + '/*.html')
    .pipe(wiredep({
      directory: buildDir + '/libs'
    }))
    .pipe(gulp.dest(buildDir));
});


//SERVER
gulp.task('server', function() {
  gulp.src(buildDir)
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open: true
    }));
});

//STYLES
gulp.task('style', function () {
  gulp.src(buildDir + '/stylus/**/*.styl')
    .pipe(stylus())
    .pipe(prefix({
    	browsers: ['last 15 versions'],
    	cascade: true
    }))
    .pipe(gulp.dest(buildDir + '/css'));
});

gulp.task('watch', function () {
  gulp.watch(buildDir + '/stylus/**/*.styl', ['style']);
  gulp.watch('bower.json', ['bower']);
});


gulp.task('default', ['server', 'watch']);