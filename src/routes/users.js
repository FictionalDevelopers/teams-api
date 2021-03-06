import { Router } from 'express';

import * as userController from '../controllers/user-controller';
import { withToken, verifyToken } from '../middlewares/auth';

const router = Router();

router.use([withToken, verifyToken]);

router.get('/', userController.getUsers);

export default router;
