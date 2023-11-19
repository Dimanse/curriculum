import express from 'express';
import appRoutes from './routes/appRoutes.js';


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