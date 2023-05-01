import express from 'express';
import { getUser, updateUser, deleteUser } from '../controllers/userController';
import isAuthenticated from '../middleware/isAuthenticated';

const router = express.Router();

router.get('/:userId', isAuthenticated, getUser);
router.put('/:userId', isAuthenticated, updateUser);
router.delete('/:userId', isAuthenticated, deleteUser);

export default router;
