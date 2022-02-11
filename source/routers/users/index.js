import express from 'express';
import { get, post } from './handlers';
import { getByHash, putByHash, deleteByHash } from './hash';
import { auth } from '../../middlewares';
// import passport from 'passport';

export const router = express.Router();

router.get('/', [ auth ], get);
// router.get('/', [ passport.authenticate('jwt', { session: false }) ], get);
router.post('/', post);

router.get('/:userHash', [ auth ], getByHash);
router.get('/:userHash', [ auth ], putByHash);
router.get('/:userHash', [ auth ], deleteByHash);

export { router as users };
