import { Router } from "express";
import { createPost, getPosts, getPostById, deletePost, updatePost } from "../controllers/posts.js";

const router = Router();

router.get("/", (req, res) =>
{
    res.send("API Home");
});

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.get("/posts/:id", getPostById);
router.delete("/posts/:id", deletePost);
router.put("/posts/:id", updatePost);

export default router;
