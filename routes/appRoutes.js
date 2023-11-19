import express from 'express';
import {inicio} from '../controllers/appControlers.js'

const router = express.Router();

//Pagina de inicio
router.get('/', inicio);


export default router;