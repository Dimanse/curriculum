import express from 'express';


import {inicio, experienciaLaboral, formacionAcademica, imprimirPdf, galeriaCertificados, galeriaReferencias, lineaCronologica} from '../controllers/appControlers.js'

const router = express.Router();

//Pagina de inicio
router.get('/', inicio);
router.get('/laboral', experienciaLaboral);
router.get('/estudio', formacionAcademica);
router.get('/pdf', imprimirPdf);
router.get('/certificados', galeriaCertificados);
router.get('/referencias', galeriaReferencias);
router.get('/cronologia', lineaCronologica)


export default router;