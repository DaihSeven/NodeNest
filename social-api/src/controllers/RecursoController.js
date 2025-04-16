// src/controllers/RecursoController.js
import RecursoService from '../services/RecursoService.js';

const service = new RecursoService();

const RecursoController = {
  getAll(req, res) {
    res.json(service.getAllRecursos());
  },

  getByTipo(req, res) {
    const tipo = req.params.tipo;
    const resultado = service.getByTipo(tipo);
    res.json(resultado);
  },

  getByLocalizacao(req, res) {
    const localizacao = req.params.localizacao;
    const resultado = service.getByLocalizacao(localizacao);
    res.json(resultado);
  },

  getById(req, res) {
    const id = req.params.id;
    const recurso = service.getById(id);
    if (!recurso) {
      return res.status(404).json({ erro: 'Recurso não encontrado' });
    }
    res.json(recurso);
  }
};

export default RecursoController;
