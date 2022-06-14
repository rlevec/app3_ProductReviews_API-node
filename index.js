import express  from "express";
import bodyParser from 'body-parser'
import cors from 'cors';

import usersRoutes from './routes/users.js';


const app = express();
const PORT = 5000;

app.use(bodyParser.json())

app.use(cors({
    origin: 'http://localhost:5000/users'
}));

app.use('/users', usersRoutes);

app.get('/', (req, res) => { res.send('Hello from Homepage') });

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
