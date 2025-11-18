import { Router } from 'express';
import { create, getAll, getByCategory, updateById } from '../../controllers/products.controller.js';

const router = Router();

// Define your routes here

router.get('/', getAll);
router.get('/:productId', getAll);
router.get('/cat/:categoryName', getByCategory);

router.post('/', create);
router.put('/:productId', updateById);


export default router;
