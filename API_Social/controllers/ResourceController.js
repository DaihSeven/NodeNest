import MockDB from '../services/MockDB.js';
import Resource from '../models/Resources.js';

export default class ResourceController {
  constructor() {
    this.db = new MockDB(); // Inicializa o banco de dados mockado
  }

  // Método privado para converter dados brutos em instâncias de Resource
  #convertToResource(data) {
    return new Resource(
      data.id,
      data.name,
      data.type,
      data.location,
      data.description,
      data.contact
    );
  }

  // GET /api/resources - Retorna todos os recursos
  getAllResources(req, res) {
    try {
      const resourcesData = this.db.getAllResources();
      const resources = resourcesData.map(data => this.#convertToResource(data));
      res.status(200).json(resources.map(res => res.toJSON()));
    } catch (error) {
      res.status(500).json({ 
        message: 'Erro ao buscar recursos',
        error: error.message 
      });
    }
  }

  // GET /api/resources/:id - Retorna um recurso específico
  getResourceById(req, res) {
    try {
      const id = parseInt(req.params.id);
      const resourceData = this.db.getResourceById(id);
      
      if (resourceData) {
        const resource = this.#convertToResource(resourceData);
        res.status(200).json(resource.toJSON());
      } else {
        res.status(404).json({ message: 'Recurso não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ 
        message: 'Erro ao buscar recurso',
        error: error.message 
      });
    }
  }

  // GET /api/resources/type/:type - Retorna recursos por tipo
  getResourcesByType(req, res) {
    try {
      const type = req.params.type;
      const resourcesData = this.db.getResourcesByType(type);
      
      if (resourcesData.length > 0) {
        const resources = resourcesData.map(data => this.#convertToResource(data));
        res.status(200).json(resources.map(res => res.toJSON()));
      } else {
        res.status(404).json({ 
          message: 'Nenhum recurso encontrado para este tipo',
          availableTypes: ['alojamento', 'higiene', 'alimentação', 'saúde']
        });
      }
    } catch (error) {
      res.status(500).json({ 
        message: 'Erro ao buscar recursos por tipo',
        error: error.message 
      });
    }
  }

  // GET /api/resources/location/:location - Retorna recursos por localização
  getResourcesNearLocation(req, res) {
    try {
      const location = req.params.location;
      const resourcesData = this.db.getResourcesNearLocation(location);
      
      if (resourcesData.length > 0) {
        const resources = resourcesData.map(data => this.#convertToResource(data));
        res.status(200).json(resources.map(res => res.toJSON()));
      } else {
        res.status(404).json({ 
          message: 'Nenhum recurso encontrado nesta localização',
          availableLocations: ['Centro', 'Zona Norte', 'Zona Sul', 'Zona Leste', 'Zona Oeste']
        });
      }
    } catch (error) {
      res.status(500).json({ 
        message: 'Erro ao buscar recursos por localização',
        error: error.message 
      });
    }
  }
}