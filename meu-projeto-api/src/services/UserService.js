// src/services/UserService.js
import users from '../database/mockDb.js';
import User from '../models/User.js';

export default class UserService {
  getAllUsers() {
    return users;
  }

  getUserById(id) {
    return users.find(user => user.id === id);
  }

  createUser(data) {
    const newUser = new User(users.length + 1, data.name, data.email);
    users.push(newUser);
    return newUser;
  }
}
