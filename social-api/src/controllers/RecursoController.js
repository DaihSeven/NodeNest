// src/controllers/RecursoController.js
import RecursoService from '../services/RecursoService.js';

const recursoService = new RecursoService();

export default class RecursoController {
  static getAll(req, res) {
    res.json(recursoService.getAllRecursos());
  }

  static getByTipo(req, res) {
    const tipo = req.params.tipo;
    const filtrados = recursoService.getByTipo(tipo);
    res.json(filtrados);
  }

  static getByLocalizacao(req, res) {
    const localizacao = req.params.localizacao;
    const filtrados = recursoService.getByLocalizacao(localizacao);
    res.json(filtrados);
  }

  //getById ?
  // getByDoc ?
}
