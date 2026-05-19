import axios from "axios";
import { useEffect, useState } from "react";

const PostsList = () => {
  const URL = "https://dummyjson.com/posts";
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setData(response.data.posts);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
    alert("Пост удален");
  };

  return (
    <div className="posts-grid">
      {data.map((item) => (
        <article className="post-card" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <button onClick={() => deletePost(item.id)}>удалить</button>
        </article>
      ))}
    </div>
  );
};

export default PostsList;
