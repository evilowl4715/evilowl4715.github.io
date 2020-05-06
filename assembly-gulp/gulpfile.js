let project_folder = require("path").basename(__dirname);
let sours_folder = "src";

let fs = require('fs');

let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/assets/css/",
        fonts: project_folder + "/assets/fonts/",
        img: project_folder + "/assets/img/",
        js: project_folder + "/assets/js/",
    },
    src: {
        html: [sours_folder + "/*.html", "!" + sours_folder + "/_*.html"],
        css: sours_folder + "/scss/style.scss",
        fonts: sours_folder + "/fonts/**/*.ttf",
        img: sours_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        js: sours_folder + "/js/main.js",
    },
    watch: {
        html: sours_folder + "/**/*.html",
        css: sours_folder + "/scss/**/*.scss",
        img: sours_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        js: sours_folder + "/js/**/*.js",
    },
    clean: "./" + project_folder + "/"
}



let {src, dest} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    scss = require('gulp-sass'),
    gulpAutoprefixer = require('gulp-autoprefixer'),
    mediaQueries = require('gulp-group-css-media-queries'),
    cleanCss = require('gulp-clean-css'),
    gulpRename = require('gulp-rename'),
    uglifyEs = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    webpHtml = require('gulp-webp-html'),
    webpcss = require('gulp-webpcss'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2');


function browserSync() {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}


function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(webpHtml())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function fonts() {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts));
}


function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(uglifyEs())
        .pipe(
            gulpRename({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}


function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded"
            })
        )
        .pipe(mediaQueries())
        .pipe(
            gulpAutoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(webpcss())
        .pipe(dest(path.build.css))
        .pipe(cleanCss())
        .pipe(
            gulpRename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function img() {
    return src(path.src.img)
        .pipe(
            webp({
                quality: 70
            })
        )
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                interlaced: true,
                optimizationLevel: 3
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}


// Автоматическое подключение шрифтов

function fontsStyle() {
    let file_content = fs.readFileSync(sours_folder + '/scss/fonts.scss');
    if (file_content == '') {
        fs.writeFile(sours_folder + '/scss/fonts.scss', '', cb);
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(sours_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
}

function cb() {

}

function watchFiles(){
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], img);
}


function clean() {
    return del(path.clean);
}


let build = gulp.series(clean, gulp.parallel(js, css, html, img, fonts), fontsStyle);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.img = img;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;