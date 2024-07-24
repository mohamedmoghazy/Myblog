import Post from "../Models/Post.js";

export const createPost = async (req,res) => {
    try {
        const {
            body: { author, title, content, cover, date}
        } = req;
        const post = await Post.create(req.body);
        res.json(post);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
  }