import { Router } from 'express';

import supplierRoutes from './supplierRoutes';
import userRoutes from './userRoutes';

const router = Router();

router.use(userRoutes);
router.use(supplierRoutes);

export default router;
