import express from 'express';
import '@config/env';
import { errorHandler } from '@yashsingh2903/ecommerce-common';
import routes from '@routes';

const app = express();
app.use(express.json());
app.use('/api/inventory', routes);
app.use(errorHandler);

export default app;
