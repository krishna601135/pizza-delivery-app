import express from 'express';
import { createOrder, getOrderDetails } from '../controllers/orderController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/', authMiddleware, createOrder);
router.get('/:orderId', authMiddleware, getOrderDetails); 


export default router;

