import express from 'express';
import RecursoController from '../controllers/RecursoController.js';

const router = express.Router();

router.get('/', RecursoController.getAll);
router.get('/tipo/:tipo', RecursoController.getByTipo);
router.get('/localizacao/:localizacao', RecursoController.getByLocalizacao);
router.get('/:id', RecursoController.getById);

export default router;
