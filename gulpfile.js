const gulp = require('gulp');
const pug = require('gulp-pug');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const del = require('del');
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');

const paths = {
    root: './build/',
    templates: {
        pages: './src/views/pages/*.pug',
        src: './src/views/**/*.pug',
        dest: './build/'
    },
    styles: {
        main: './src/assets/styles/main.scss',
        src: './src/assets/styles/**/*.scss',
        dest: './build/assets/styles'
    },
    scripts: {
        src: './src/assets/scripts/**/*.js',
        dest: './build/assets/scripts/'
    },
    images: {
        src: './src/assets/images/**/*.*',
        dest: './build/assets/images/'
    },
    fonts: {
        src: './src/assets/fonts/**/*.*',
        dest: './build/assets/fonts/'
    }
}

// вотчер
function watch(){
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
}
// следим за build и релоадим браузер
function server(){
    browserSync.init({
        server:paths.root
    });
    browserSync.watch(paths.root + `**/*.*`, browserSync.reload);
}


//очистка
function clean(){
    return del(paths.root);
}
pug
function templates(){
    return gulp.src(paths.templates.pages)
        .pipe(plumber())
        .pipe(pug({pretty:true}))
        .pipe(gulp.dest(paths.root));
}

//scss
function styles(){
    return gulp.src(paths.styles.main)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(postcss(require('./postcss.config')))
        .pipe(sourcemaps.write())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest(paths.styles.dest))
}
// webpack
function scripts(){
    return gulp.src(paths.scripts.src)
        .pipe(plumber())    
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest));
}
// перенос картинок
function images() {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
}
// перенос шрифтов
function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
}


exports.styles = styles;
exports.clean = clean;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;
exports.templates = templates;

gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, templates, scripts, images, fonts),
    gulp.parallel(watch, server)
));
