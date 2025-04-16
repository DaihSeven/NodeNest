import express from 'express';
import cors from 'cors';
import resourceRoutes from './routes/resourceRoutes.js';
/*Problemas relacionados a impotação e exportação da routes*/

const app = express();

// Middleware para permitir requisições de diferentes origens  
app.use(cors());

// Middleware para parsear JSON no body das requisições  
app.use(express.json());

// Define o prefixo '/api' para todas as rotas de recursos  
app.use('/api', resourceRoutes);

// Rota de documentação  
app.get('/api/docs', (req, res) => {
  res.json({
    message: "API de Recursos para Pessoas em Situação de Rua - Documentação",
    endpoints: [
      {
        method: "GET",
        path: "/api/resources",
        description: "Retorna todos os recursos disponíveis"
      },
      {
        method: "GET",
        path: "/api/resources/:id",
        description: "Retorna um recurso específico pelo ID"
      },
      {
        method: "GET",
        path: "/api/resources/type/:type",
        description: "Retorna recursos por tipo (alojamento, higiene, alimentação, saúde)"
      }
    ]
  });
});

// Middleware de erro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erro interno no servidor' });
});

export default app;