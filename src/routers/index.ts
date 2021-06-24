import express from 'express';
import PostRouter from './posts.router';

const router = express.Router();

router.use('/posts', PostRouter);

export default router;
