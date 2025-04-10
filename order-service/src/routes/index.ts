import express from 'express';
import orderRoutes from '@routes/order.route';

const router = express.Router();

router.use('/orders', orderRoutes);

export default router;