// src/services/RecursoService.js
import recursos from '../database/mockDb.js';

export default class RecursoService {
  getAllRecursos() {
    return recursos;
  }

  getByTipo(tipo) {
    return recursos.filter(r => {
      // Verifica se tipo é um array
      if (Array.isArray(r.tipo)) {
        // Se for array, verifica se o tipo buscado está em algum dos valores do array
        return r.tipo
          .map(t => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())
          .includes(tipo.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase());
      }
      // Se tipo for uma string, faz a comparação normal
      return r.tipo && typeof r.tipo === 'string' && r.tipo.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() ===
        tipo.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    });
  }
    
  getByLocalizacao(localizacao) {
    return recursos.filter(r =>
      r.endereco.toLowerCase().includes(localizacao.toLowerCase())
    );
  }

  getById(id) {
    return recursos.find(r => r.id === parseInt(id));
  }
}
