import express from 'express';
import recursoRoutes from './routes/recursoRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swaggerSpec.js';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/docs', (req, res) => res.redirect('/api-docs')); // ← redireciona /docs para /api-docs
app.use(express.json());
app.use('/recursos', recursoRoutes);

export default app;
