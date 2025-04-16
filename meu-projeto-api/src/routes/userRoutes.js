// src/routes/userRoutes.js
import express from 'express';
import UserController from '../controllers/UserController.js';

const router = express.Router();

router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.post('/', UserController.create);

export default router;
