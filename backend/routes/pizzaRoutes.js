import express from 'express';
import { getPizzas, createMultiplePizzas } from '../controllers/pizzaController.js';
const router = express.Router();

router.get('/', getPizzas);
router.post('/', createMultiplePizzas);


export default router;

