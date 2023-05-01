import express from 'express';
import { createStudySession, getStudySessions, updateStudySession, deleteStudySession } from '../controllers/studySessionController';
import isAuthenticated from '../middleware/isAuthenticated';

const router = express.Router();

router.post('/', isAuthenticated, createStudySession);
router.get('/', isAuthenticated, getStudySessions);
router.put('/:sessionId', isAuthenticated, updateStudySession);
router.delete('/:sessionId', isAuthenticated, deleteStudySession);

export default router;