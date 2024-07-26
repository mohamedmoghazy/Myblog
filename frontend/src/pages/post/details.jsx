import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("Post id = " + postId);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) {
        setError("Post ID is not defined");
        setLoading(false);
        return;
      }

      console.log("Post id = " + postId);

      try {
        const response = await fetch(`http://localhost:3000/posts/${postId}`, {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return <div className="container mx-auto px-4">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 text-red-500">Error: {error}</div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 text-gray-500">Post not found</div>
    );
  }

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      <img
        src={post.cover}
        alt={post.title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="mt-2 text-3xl font-bold">{post.title}</h2>
      <p className="mt-2 text-gray-600">{post.author}</p>
      <p className="mt-2 text-gray-600">{post.date}</p>
      <div className="mt-4 text-gray-700">{post.content}</div>
    </div>
  );
};

export default PostDetails;
