import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDatabase from './config/db.js';
import { addUser, getUsers, deleteUser, getUser, updateUser, } from './controllers/user.controllers.js';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
//Start server
const startServer = () => app.listen(PORT, () => console.log('Starting server on port: ' + PORT));
//Database
connectDatabase(startServer);
// Routes
app.get('/api/users', getUsers);
app.get('/api/users/:id', getUser);
app.post('/api/users', addUser);
app.put('/api/users/:id', updateUser);
app.delete('/api/users/:id', deleteUser);
