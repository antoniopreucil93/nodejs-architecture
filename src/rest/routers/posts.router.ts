import express from 'express';
import { PostService } from '../../services';

const router = express.Router();
const postervice = new PostService();

router.get('/', async (req, res) => {
	const posts = await postervice.getAll();

	return res.json(posts).status(200);
});

export default router;
