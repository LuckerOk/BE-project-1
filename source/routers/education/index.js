import express from 'express';
import {
    postEnrollByHash,
    postExpelByHash,
    postVideosByHash,
    postKeynotesByHash,
    getVideosByHash,
    deleteVideoByHash,
    getKeynoteByHash,
    deleteKeynoteByHash,
} from './hash';
import { auth } from '../../middlewares';

export const router = express.Router();

router.post('/classes/:classHash/enroll', auth, postEnrollByHash);
router.post('/classes/:classHash/expel', auth, postExpelByHash);
router.post('/lessons/:lessonHash/videos', auth, postVideosByHash);
router.post('/lessons/:lessonHash/keynotes', auth, postKeynotesByHash);
router.get('/lessons/:lessonHash/videos/:videoHash', auth, getVideosByHash);
router.delete('/lessons/:lessonHash/videos/:videoHash', auth, deleteVideoByHash);
router.get('/lessons/:lessonHash/keynotes/:keynoteHash', auth, getKeynoteByHash);
router.delete('/lessons/:lessonHash/keynotes/:keynoteHash', auth, deleteKeynoteByHash);

export { router as education };
