
const gulp =require('gulp');
const sass =require('gulp-sass');
const autoprefixer =require('gulp-autoprefixer');


function css() {
    return gulp
    .src('scss/app.scss')
    .pipe(autoprefixer({
        overrideBrowserlist:['last 2 versions'],
        cascade:false
    }))
    .pipe(sass({
       outputStyle:'expanded',
    }))
    .pipe(gulp.dest('css'));
}


//esta funcion permite que cada vez que halla cambios en los archicos que esten dentro de la carpeta scss logren automaticamente guardarse
function watchFiles(){
    gulp.watch('scss/*.scss',css);
    gulp.watch('index.html');
}

//registrar funciones como una tarea;
//para utilizar el auto guardado escribes gulp watch 

gulp.task('css',css);
gulp.task('watch',gulp.parallel(watchFiles) );