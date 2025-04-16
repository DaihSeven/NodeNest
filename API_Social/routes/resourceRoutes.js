import express from 'express';
import ResourceController from '../controllers/ResourceController.js';

const router = express.Router();
const resourceController = new ResourceController();
// Cria uma instância do controller


// Define as rotas GET
router.get('/resources', (req, res) => resourceController.getAllResources(req, res));
router.get('/resources/:id', (req, res) => resourceController.getResourceById(req, res));
router.get('/resources/type/:type', (req, res) => resourceController.getResourcesByType(req, res));
router.get('/resources/location/:location', (req, res) => resourceController.getResourcesNearLocation(req, res));

export default router;