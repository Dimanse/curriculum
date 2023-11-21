import express from 'express';
import imagemin from 'gulp-imagemin';
import notify from 'gulp-notify';
import cache from 'gulp-cache'
import appRoutes from './routes/appRoutes.js';
import pkg from 'gulp';
const { src, dest } = pkg;



//crear la app

const app = express();

// Habilitar lectura de datos de formularios
app.use( express.urlencoded({extended: true}) )

//Habilitar pug
app.set('view engine', 'pug');  // decimos que vamos a usar pug
app.set('views', './views'); // le decimos que va estar en la carpeta ./views

// Carpeta Pública (archivos estáticos)

app.use(express.static('public'));

// Routing
app.use('/', appRoutes);





const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log( `El servidor esta funcionando en el puerto: ${port}` );
});

const imagenes = ()=>{
    return src('src/imagenes/**/*{png,svg,jpg,jpeg}')
        .pipe(cache(imagemin({ optimizationLevel: 3 })))
        .pipe(dest('public/img'))
        .pipe(notify({ message: 'Imagen Completada' }));

        
        
}

imagenes()





