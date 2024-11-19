import { Router } from 'express';

import userRoutes from './userRoutes';
import supplierRoutes from './supplierRoutes';

const router = Router();

router.use(userRoutes);
router.use(supplierRoutes);

export default router;
