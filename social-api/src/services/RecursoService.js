import recursos from '../database/mockDb.js';

export default class RecursoService {
  getAllRecursos() {
    return recursos;
  }

  getByTipo(tipo) {
    return recursos.filter(r => r.tipo.toLowerCase() === tipo.toLowerCase());
  }

  getByLocalizacao(localizacao) {
    return recursos.filter(r =>
      r.endereco.toLowerCase().includes(localizacao.toLowerCase())
    );
  }
}
//pensando em criar um get para documentação;