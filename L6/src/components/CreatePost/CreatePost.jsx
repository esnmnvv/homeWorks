import { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const URL = "https://dummyjson.com/posts/add";

  const handleChange = (e) => {
    if (e.target.placeholder === "Title") {
      setTitle(e.target.value);
    } else {
      setBody(e.target.value);
    }
  };

  const postData = async () => {
    try {
      const response = await axios.post(URL, {
        title: title,
        body: body,
        userId: 1,
      });
      console.log("Post created:", response.data);
      alert("Post created successfully!");
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error creating post", error);
      alert("Error creating post");
    }
  };

  return (
    <div>
      <div>
        <h2>Create Post</h2>
        <input
          onChange={handleChange}
          value={title}
          type="text"
          placeholder="Title"
        />
        <input
          onChange={handleChange}
          value={body}
          type="text"
          placeholder="Body"
        />
        <button onClick={postData}>Create</button>
      </div>
    </div>
  );
};

export default CreatePost;
