import express from 'express';
import { get, post } from './handlers';
import { getByHash, putByHash, deleteByHash } from './hash';

export const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:lessonHash', getByHash);
router.put('/:lessonHash', putByHash);
router.delete('/:lessonHash', deleteByHash);

export { router as lessons };
