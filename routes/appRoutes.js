import express from 'express';


import {inicio, experienciaLaboral, formacionAcademica, imprimirPdf} from '../controllers/appControlers.js'

const router = express.Router();

//Pagina de inicio
router.get('/', inicio);
router.get('/laboral', experienciaLaboral);
router.get('/estudio', formacionAcademica);
router.get('/pdf', 
    imprimirPdf);


export default router;