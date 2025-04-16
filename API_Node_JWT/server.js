import express from 'express';
import publicRoutes from './routes/public.js';
//import privateRoutes from './routes/private.js';
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const app = express();

const PORT = 3000;
app.use(express.json());

/*3 rotas
Públicas
    Cadastrar e logar 

Privadas
    listar usuários

*/
app.use('/', publicRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});