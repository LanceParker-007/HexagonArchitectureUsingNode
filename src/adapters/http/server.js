import express, { json } from 'express';
import UserService from '../domain/user-service';

const app = express();
const userService = new UserService();

app.use(json());

app.get('/users', async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
});

app.get('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await userService.getUserById(id);
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json(user);
});

app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    const user = await userService.addUser(name, email);
    res.json(user);
});

app.put('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const user = await userService.updateUser(id, name, email);
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json(user);
});

app.delete('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await userService.deleteUser(id);
    res.send('User deleted successfully');
});

app.listen(3000, () => console.log('Server started'));

