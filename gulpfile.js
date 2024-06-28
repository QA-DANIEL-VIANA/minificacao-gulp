const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compilaSaas() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass(
            { outputStyle: 'compressed' }
        ))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImagem() {
    return gulp.src('./source/imagens/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'))
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))

};



exports.default = function () {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSaas));
    gulp.watch('./source/imagens/*', { ignoreInitial: false }, gulp.series(comprimeImagem));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
}
