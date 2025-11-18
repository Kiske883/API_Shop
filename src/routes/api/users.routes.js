import { Router } from 'express';
import { register } from '../../controllers/users.controller.js';

const router = Router();

router.post('/', register);
/*
router.get('/', getAll);
router.get('/:productId', getAll);
router.get('/cat/:categoryName', getByCategory);


router.put('/:productId', updateById);
*/
export default router;
