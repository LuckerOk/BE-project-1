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

export const router = express.Router();

router.post('/classes/:classHash/enroll', postEnrollByHash);
router.post('/classes/:classHash/expel', postExpelByHash);
router.post('/lessons/:lessonHash/videos', postVideosByHash);
router.post('/lessons/:lessonHash/keynotes', postKeynotesByHash);
router.get('/lessons/:lessonHash/videos/:videoHash', getVideosByHash);
router.delete('/lessons/:lessonHash/videos/:videoHash', deleteVideoByHash);
router.get('/lessons/:lessonHash/keynotes/:keynoteHash', getKeynoteByHash);
router.delete('/lessons/:lessonHash/keynotes/:keynoteHash', deleteKeynoteByHash);

export { router as education };
