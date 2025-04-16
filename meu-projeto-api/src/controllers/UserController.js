// src/controllers/UserController.js
import UserService from '../services/UserService.js';

const userService = new UserService();

export default class UserController {
  static getAll(req, res) {
    const users = userService.getAllUsers();
    res.json(users);
  }

  static getById(req, res) {
    const id = parseInt(req.params.id);
    const user = userService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(user);
  }

  static create(req, res) {
    const newUser = userService.createUser(req.body);
    res.status(201).json(newUser);
  }
}
