import express from 'express';
import orderRoutes from '@routes/order.route';

const router = express.Router();

router.use('/api/orders', orderRoutes);

export default router;