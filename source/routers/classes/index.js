import express from 'express';
import { get, post } from './handlers';
import { getByHash, putByHash, deleteByHash } from './hash';
import { auth } from '../../middlewares';

export const router = express.Router();

router.get('/', get);
router.post('/', auth, post);

router.get('/:classHash', auth, getByHash);
router.put('/:classHash', auth, putByHash);
router.delete('/:classHash', auth, deleteByHash);

export { router as classes };
