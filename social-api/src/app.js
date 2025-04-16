import express from 'express';
import recursoRoutes from './routes/recursoRoutes.js';

const app = express();

app.use(express.json());
app.use('/recursos', recursoRoutes);

export default app;
