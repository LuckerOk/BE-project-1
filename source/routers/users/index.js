import express from 'express';
import { get, post } from './handlers';
import { getByHash, putByHash, deleteByHash } from './hash';
// import passport from 'passport';

export const router = express.Router();
// import { auth } from '../../middlewares/auth';

// router.get('/', [ auth ], get);
router.get('/', get);
// router.get('/', [ passport.authenticate('jwt', { session: false }) ], get);
router.post('/', post);

// router.get('/:userHash', [ auth ], getByHash);
router.get('/:userHash', getByHash);
// router.get('/:userHash', [ auth ], putByHash);
router.put('/:userHash', putByHash);
// router.get('/:userHash', [ auth ], deleteByHash);
router.delete('/:userHash', deleteByHash);

export { router as users };
