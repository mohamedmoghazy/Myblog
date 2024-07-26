import { Router } from "express";
import { createPost, getPosts } from "../controllers/posts.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("API Home");
});

router.get("/posts", getPosts);
router.post("/posts", createPost);

export default router;
