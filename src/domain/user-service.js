const UserRepository = require('./user-repository');
const User = require('../models/user');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async addUser(name, email) {
        const id = Math.floor(Math.random() * 1000);
        const user = new User(id, name, email);
        return this.userRepository.addUser(user);
    }

    async getUserById(id) {
        return this.userRepository.getUserById(id);
    }

    async getAllUsers() {
        return this.userRepository.getAllUsers();
    }

    async updateUser(id, name, email) {
        return this.userRepository.updateUser(id, name, email);
    }

    async deleteUser(id) {
        return this.userRepository.deleteUser(id);
    }
}

export default UserService;
