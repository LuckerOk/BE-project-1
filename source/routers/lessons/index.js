import express from 'express';
import { get, post } from './handlers';
import {
    getByHash,
    putByHash,
    deleteByHash,
    deleteKeynoteByHash,
    deleteVideoByHash,
    getKeynoteByHash,
    getVideosByHash,
    postKeynotesByHash,
    postVideosByHash,
} from './hash';
import { auth } from '../../middlewares';

export const router = express.Router();

router.get('/', get);
router.post('/', auth, post);

router.get('/:lessonHash', auth, getByHash);
router.put('/:lessonHash', auth, putByHash);
router.delete('/:lessonHash', auth, deleteByHash);
router.post('/:lessonHash/videos', auth, postVideosByHash);
router.post('/:lessonHash/keynotes', auth, postKeynotesByHash);
router.get('/:lessonHash/videos/:videoHash', auth, getVideosByHash);
router.delete('/:lessonHash/videos/:videoHash', auth, deleteVideoByHash);
router.get('/:lessonHash/keynotes/:keynoteHash', auth, getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:keynoteHash', auth, deleteKeynoteByHash);

export { router as lessons };
