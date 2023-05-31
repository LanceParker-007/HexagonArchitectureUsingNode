const User = require('../models/user');

class UserRepository {
    constructor() {
        this.users = [];
    }

    async addUser(user) {
        this.users.push(user);
        return user;
    }

    async getUserById(id) {
        return this.users.find(user => user.id === id);
    }

    async getAllUsers() {
        return this.users;
    }

    async updateUser(id, name, email) {
        const user = await this.getUserById(id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        user.name = name;
        user.email = email;
        return user;
    }

    async deleteUser(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new Error(`User with id ${id} not found`);
        }
        this.users.splice(index, 1);
    }
}

export default UserRepository;
