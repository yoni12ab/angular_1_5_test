//https://quickleft.com/blog/setting-up-a-clientside-javascript-project-with-gulp-and-browserify/
//https://omarfouad.com/
//http://code.ciphertrick.com/2015/11/23/scalable-angularjs-setup-with-gulp-browserify/
// Gulp Dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');

// Build Dependencies
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

// Style Dependencies
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

// Development Dependencies
var jshint = require('gulp-jshint');

// Test Dependencies
var mochaPhantomjs = require('gulp-mocha-phantomjs');

//local server
var connect = require('gulp-connect');
var open = require('gulp-open');
 var os = require('os');
 
// Default usage: 
// Open one file with default application 


 

gulp.task('connect', function () {
    connect.server({ 
         livereload: true,
       // root: '/',
        port: 4000
    });
    var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));
    
    /*
    gulp.src('./public/index.html')
    .pipe(open({app:browser}));*/
})

//JSHint
//set up linting for our clientside code as well as our test code, 
gulp.task('lint-client', function () {
    return gulp.src('./client/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('lint-test', function () {
    return gulp.src('./test/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});


//Setting Up Browserify
/*Now we need to set up Browserify to compile our code. 
First, we’ll define a couple of gulp tasks: one to build the app, and one to build the tests. 
We’ll copy the result of the compile to public so we can serve it unminified in development, and we’ll also put a copy into build, 
where we’ll grab it for minification. The compiled test file will also go into build. 
Finally, we’ll set up a watch task to trigger rebuilds of the app and test when one of the source files changes.*/
gulp.task('browserify-client', ['lint-client'], function () {
    return gulp.src('app/index.js')
      .pipe(browserify({
          insertGlobals: true
      }))
      .pipe(rename('surf-index.js'))
      .pipe(gulp.dest('build'))
      .pipe(gulp.dest('public/javascripts'))
      .pipe(connect.reload())
      ;
});

gulp.task('browserify-test', ['lint-test'], function () {
    return gulp.src('test/client/index.js')
      .pipe(browserify({
          insertGlobals: true
      }))
      .pipe(rename('client-test.js'))
      .pipe(gulp.dest('build'))
      ;
});

gulp.task('watch', function () { 
 
    gulp.watch('app/**/*.js', ['browserify-client']);
    gulp.watch('test/client/**/*.js', ['browserify-test']);
    gulp.watch('app/**/*.scss', ['styles']);
    gulp.watch('app/**/*.html', ['reload-page']);
});


gulp.task('reload-page', function () {
    connect.reload();
});

gulp.task('test', ['lint-test', 'browserify-test'], function () {
    return gulp.src('test/client/index.html')
      .pipe(mochaPhantomjs());
});


gulp.task('styles', function () {
    return gulp.src('app/shared/sass/index.scss')
      .pipe(sass())
      .pipe(prefix({ cascade: true }))
      .pipe(rename('surf-index.css'))
      .pipe(gulp.dest('build'))
      .pipe(gulp.dest('public/stylesheets'))
      .pipe(connect.reload())
        ;
});

gulp.task('minify', ['styles'], function () {
    return gulp.src('build/surf-index.css')
      .pipe(minifyCSS())
      .pipe(rename('surf-index.min.css'))
      .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('uglify', ['browserify-client'], function () {
    return gulp.src('build/surf-index.js')
      .pipe(uglify())
      .pipe(rename('surf-index.min.js'))
      .pipe(gulp.dest('public/javascripts'));
});

gulp.task('build', ['uglify', 'minify']);



gulp.task('default', [/*'test',*/ 'build', 'watch', 'connect']);