import express from 'express';
import { get, post } from './handlers';
import { getByHash, putByHash, deleteByHash } from './hash';
import { auth } from '../../middlewares';

export const router = express.Router();

router.get('/', get);
router.post('/', auth, post);

router.get('/:lessonHash', auth, getByHash);
router.put('/:lessonHash', auth, putByHash);
router.delete('/:lessonHash', auth, deleteByHash);

export { router as lessons };
