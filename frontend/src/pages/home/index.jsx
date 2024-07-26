import React, { useEffect, useState } from "react";
import CreateForm from "../../components/createForm";
import PostCard from "../../components/PostCard";

// Mock Data - need to update accordingly
const mockData = [
  {
    id: 1,
    title: "Post One",
    cover: "https://promova.com/content/large_types_of_birds_8b7339085c.png",
    author: "This is snippet",
    content: "This is the full content",
    date: "07/25/2024",
  },
  {
    id: 2,
    title: "Post Two",
    cover: "https://promova.com/content/large_types_of_birds_8b7339085c.png",
    author: "This is snippet",
    content: "This is the full content",
    date: "07/25/2024",
  },
];

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [postCreated, setPostCreated] = useState(false);
  const [toaster, setToaster] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
        console.log(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [postCreated]);

  function handlePostCreated() {
    setPostCreated(prev => !prev);
    setToaster(prev => !prev);
    setTimeout(() => setToaster(false), 2000);
  };

  if (loading) {
    return <div className="container mx-auto px-4">Loading...</div>;
  }
  if (error) {
    return (
      <div className="container mx-auto px-4 text-red-500">Error: {error}</div>
    );
  }
  if (posts.length === 0) {
    return (
      <div className="container mx-auto px-4 text-gray-500">No posts found</div>
    );
  }
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end my-4">
          <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => document.getElementById('my_modal_5').showModal()}
        >Create Post
        </button>
      </div>

      {toaster ?
     <div className="toast toast-top toast-end">
         <div className="alert alert-success">
      <span>Post created successfully.</span>
      </div> 
     </div> : null }

      {posts.map((post, idx) => {
        return (
          <div key={idx}>
            <PostCard post={post} />
          </div>
        );
      })}
      <CreateForm handlePostCreated={handlePostCreated} />
    </div>
  );
}
