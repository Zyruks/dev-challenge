// list of dependences
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const browserSync = require("browser-sync").create();

//HTML Function
function compilehtml() {
  return src("src/**/*.html", { sorcemaps: true }).pipe(dest("public"));
}

//SCSS Function
function compilescss() {
  return (
    src("src/scss/*.scss", { sourcemaps: true })
      .pipe(sass().on("error", sass.logError)) // Compiler
      .pipe(postcss([autoprefixer("last 1 versions")])) // Prefixer
      //.pipe(postcss([cssnano()])) //CSS minifier not running because still looking at code
      .pipe(dest("public/css", { sourcemaps: "." }))
  );
}

exports.compilescss = compilescss;
// assets
function compilesvg() {
  return src("src/assets/**/*.svg").pipe(dest("public/assets/"));
}

function compilepng() {
  return src("src/assets/**/*.png").pipe(dest("public/assets/"));
}

// JsCompiler
function compileJs() {
  return src("src/scripts/**/*.js").pipe(dest("public/scripts/"));
}

// End of Stylelint
//BrowserSync Services
// This function tell witch folder im using for server
function browsersyncServer(cb) {
  browserSync.init({
    server: {
      baseDir: "public/",
    },
  });
  cb();
}
//This function reload the browser
function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

// create watchtask, if something change it will run browserSyncReload.

function watchTask() {
  watch("src/**/*.html", series(compilehtml, browserSyncReload));
  watch(
    "src/scss/**/*.scss",
    series(compilescss, compilesvg, compilepng, compileJs, browserSyncReload)
  );
}

// default gulp
exports.default = series(
  compilehtml,
  compilescss,
  compileJs,
  compilepng,
  compilesvg,
  browsersyncServer,
  browserSyncReload,
  watchTask
);
