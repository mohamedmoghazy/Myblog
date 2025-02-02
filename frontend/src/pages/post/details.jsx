import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import UpdateForm from "../../components/updateForm";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postUpdated, setPostUpdated] = useState(false);
  const [toaster, setToaster] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) {
        setError("Post ID is not defined");
        setLoading(false);
        return;
      }

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
  }, [postUpdated]);

  function handleDelete() {
    try {
      axios.delete(`http://localhost:3000/posts/${postId}`)
      .then((res) => {
        console.log(res.data)
        navigate('/');
      })
    } catch (error) {
      console.error(error)
    }
  };

  function handlePostCreated() {
    setPostUpdated(prev => !prev);
    setToaster(prev => !prev);
    setTimeout(() => setToaster(false), 2000);
  };


  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4 w-1/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-1/2 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-1/2 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-3/4 mx-auto"></div>
          </div>
          <p className="text-gray-500">Loading...</p>
        </div>
        <footer className="bg-gray-800 text-white text-center py-3">
          <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="flex-grow flex items-center justify-center">
          <p className="text-red-500 text-xl font-semibold">{`Error: ${error}`}</p>
        </div>
        <footer className="bg-gray-800 text-white text-center py-3">
          <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="flex-grow flex items-center justify-center">
          <p className="text-gray-500 text-xl">Post not found</p>
        </div>
        <footer className="bg-gray-800 text-white text-center py-3">
          <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h2>
          <p className="text-gray-600 text-lg mb-2">by {post.author}</p>
          <p className="text-gray-500 text-sm mb-4">{new Date(post.date).toLocaleDateString()}</p>
          <div className="text-gray-700 leading-relaxed">{post.content}</div>
        </div>
      </div>

      {toaster ?
     <div className="toast toast-top toast-end">
         <div className="alert alert-success">
      <span>Post updated successfully.</span>
      </div> 
     </div> : null }

      <div className="flex justify-center align-middle gap-3 p-4">
        <Link to='/'><button className="btn">Home</button></Link>
        <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Update</button>
        <button className="btn btn-error" onClick={handleDelete}>Delete</button>
        </div>
     
      <UpdateForm post={post} postId={postId} handlePostCreated={handlePostCreated}/>

      <footer className="bg-gray-800 text-white text-center py-3 mt-auto">
        <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PostDetails;
