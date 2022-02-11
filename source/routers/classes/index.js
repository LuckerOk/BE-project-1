import express from 'express';
import { get, post } from './handlers';
import { getByHash, putByHash, deleteByHash, postEnrollByHash, postExpelByHash } from './hash';
import { auth } from '../../middlewares';

export const router = express.Router();

router.get('/', get);
router.post('/', auth, post);

router.get('/:classHash', auth, getByHash);
router.put('/:classHash', auth, putByHash);
router.delete('/:classHash', auth, deleteByHash);
router.post('/:classHash/enroll', auth, postEnrollByHash);
router.post('/:classHash/expel', auth, postExpelByHash);

export { router as classes };
