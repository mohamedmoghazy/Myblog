import { Router } from "express";
import { createPost, getPosts, getPostById } from "../controllers/posts.js";

const router = Router();

router.get("/", (req, res) =>
{
    res.send("API Home");
});

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.get("/posts/:id", getPostById);

export default router;
