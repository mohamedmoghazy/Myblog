import { useState } from "react";
import axios from 'axios';

function CreateForm({handlePostCreated}) {
    const [postObj, setPostObj] = useState({
        author: "",
        title: "",
        content: "",
        cover: "",
        date: "",
    });

    function handleChange(e) {
        setPostObj((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(postObj);

        try {
            axios.post('http://localhost:3000/posts', postObj)
            .then((res) => {
                console.log(res.data);
                handlePostCreated();
                document.getElementById('my_modal_5').close();
            })
        } catch (error) {
            console.error(error);
        }

        setPostObj({
        author: "",
        title: "",
        content: "",
        cover: "",
        date: "",
        });
    }

    function handleClose(e) {
        e.preventDefault();
        document.getElementById('my_modal_5').close();
    }

    return (
        <>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                    <h3 className="font-bold text-lg">Create a new Post</h3>
                <div className="modal-action flex justify-center">
                    <form onSubmit={handleSubmit} method="dialog" className="w-full">
                        <div className="flex flex-col justify-center gap-3 pb-4">
                            <label className="input input-bordered flex items-center gap-2">
                                Author
                            <input
                              type="text"
                              name="author"
                              className="grow"
                              value={postObj.author}
                              required
                              onChange={handleChange} />
                            </label>
    
                            <label className="input input-bordered flex items-center gap-2">
                            Title
                            <input
                              type="text"
                              name="title"
                              className="grow"
                              value={postObj.title}
                              required
                              onChange={handleChange} />
                            </label>
    
                            <textarea
                                className="textarea textarea-bordered flex items-center grow w-full"
                                placeholder="Content"
                                name="content"
                                value={postObj.content}
                                required
                                onChange={handleChange}>
                            </textarea> 

                            <label className="input input-bordered flex items-center gap-2">
                                Img
                            <input
                              type="url"
                              name="cover"
                              className="grow"
                              placeholder="URL"
                              value={postObj.cover}
                              required
                              onChange={handleChange} />
                            </label>
    
                            <label className="input input-bordered flex items-center gap-2">
                                Date
                            <input
                              type="date"
                              name="date"
                              className="grow"
                              value={postObj.date}
                              required
                              onChange={handleChange} />
                            </label>
                        <button type="submit" className="btn">Submit</button>
                        </div>

                        <button type="button" onClick={handleClose} className="btn btn-square absolute top-4 right-4">
                         <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </form>
                </div>
            </div>
        </dialog>

        </>
      );
}

export default CreateForm;
