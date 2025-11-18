import { Router } from 'express' ;

import productRoutes from './api/products.routes.js' ;
import userRoutes from './api/users.routes.js' ;

const router = Router();

router.use('/products',productRoutes) ;
router.use('/users',userRoutes) ;

export default router ; 

