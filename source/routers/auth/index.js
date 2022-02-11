import express from 'express';
import { login, logout } from './handlers';
import { auth } from '../../middlewares';

export const router = express.Router();

router.post('login', login);
router.post('logout', auth, logout);

export { router as auth };
