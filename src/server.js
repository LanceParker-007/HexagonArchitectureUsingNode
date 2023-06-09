//Driver Adapter

import express from 'express';
import HttpUserRepository from './adapters/http/httpUserRepository.js';
import UserService from './domain/services/userService.js';

// Create instances of the HTTP adapter and the User service
const httpUserRepository = new HttpUserRepository();
const userService = new UserService(httpUserRepository);//Sending httpUserRepository as dependency to userService

// Create the Express server
const app = express();
app.use(express.json());

// API Routes
app.get("/", (req, res)=>{
  return res.send("Welcome to Hexagon Architecture.")
})

app.get('/users/:id', (req, res) => {
  try {
    const user = userService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.get("/users", (req, res)=>{
  try {
    const users = userService.getAllUsers();
    res.json(users);
  } catch (error) {
   res.status(404).json({error: error.message}); 
  }
})

app.post('/users', (req, res) => {
  try {
    const user = userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/users/:id', (req, res) => {
  try {
    const user = { id: req.params.id, ...req.body };
    const updatedUser = userService.updateUser(user);
    res.json(updatedUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.delete('/users/:id', (req, res) => {
  try {
    const deletedUser = userService.deleteUser(req.params.id);
    res.json(deletedUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Start the server
app.listen(5000, () => {
  console.log(`Server is listening on port 5000`);
});
