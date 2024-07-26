import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div
      key={post.id}
      className="max-w-lg mx-auto my-4 p-6 bg-white rounded-lg shadow-md"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="mt-2 text-2xl font-bold">{post.title}</h2>
      <p className="mt-2 text-gray-600">{post.snippet}</p>
      <Link
        to={`/post/${post.id}`}
        className="mt-4 inline-block text-blue-500 hover:underline"
      >
        Read More
      </Link>
    </div>
  );
};
export default PostCard;
