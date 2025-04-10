import express from 'express';
import { addInventory } from '@controllers/inventory.controller';

const router = express.Router();

router.post('/', addInventory);

export default router;
