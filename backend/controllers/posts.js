import Post from "../Models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send("something went wrong");
  }
};

export const createPost = async (req, res) => {
  try {
    const {
      body: { author, title, content, cover, date },
    } = req;
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
