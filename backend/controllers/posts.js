import Post from "../Models/Post.js";

export const getPosts = async (req, res) =>
{
  try
  {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error)
  {
    console.error(error);
    res.status(500).send("something went wrong");
  }
};

export const createPost = async (req, res) =>
{
  try
  {
    const {
      body: { author, title, content, cover, date },
    } = req;
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error)
  {
    res.status(500).json({ error: error.message });
  }
};

export const getPostById = async (req, res) =>
{
  try
  {
    const { id } = req.params;
    const post = await Post.findByPk(id);

    if (!post)
    {
      return res.status(404).send("Post not found");
    }

    res.json(post);
  } catch (error)
  {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};