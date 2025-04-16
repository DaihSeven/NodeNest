export default class Resource {
    constructor(id, name, type, location, description, contact) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.location = location;
      this.description = description;
      this.contact = contact;
    }
  
    toJSON() {
      return {
        id: this.id,
        name: this.name,
        type: this.type,
        location: this.location,
        description: this.description,
        contact: this.contact
      };
    }
  
    // Métodos adicionais do Model podem ser incluídos aqui
    isValid() {
      return this.id && this.name && this.type && this.location;
    }
  }