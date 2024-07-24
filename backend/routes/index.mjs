import { Router } from 'express';
import { createPost } from '../controllers/posts.js';

const router = Router();

router.get('/', (req, res) =>
{
    res.send('API Home');
});

router.post('/posts', createPost);

export default router;