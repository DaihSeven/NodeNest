export default class MockDB {
    constructor() {
      this.resources = [
        {
          id: 1,
          name: "Abrigo Noturno Centro",
          type: "alojamento",
          location: "Centro",
          description: "Abrigo disponível das 18h às 8h para pernoite",
          contact: "1234-5678"
        },
        {
          id: 2,
          name: "Banho e Lavanderia Solidária",
          type: "higiene",
          location: "Zona Norte",
          description: "Banho quente e lavagem de roupas disponível de terça a sábado",
          contact: "2345-6789"
        },
        {
          id: 3,
          name: "Restaurante Comunitário",
          type: "alimentação",
          location: "Zona Sul",
          description: "Refeições gratuitas das 11h às 14h",
          contact: "3456-7890"
        }
      ];
    }
  
    getAllResources() {
      return [...this.resources]; // Retorna cópia do array
    }
  
    getResourceById(id) {
      return this.resources.find(resource => resource.id === id);
    }
  
    getResourcesByType(type) {
      return this.resources.filter(resource => resource.type === type);
    }
  
    getResourcesNearLocation(location) {
      return this.resources.filter(resource => 
        resource.location.toLowerCase().includes(location.toLowerCase())
      );
    }
  }