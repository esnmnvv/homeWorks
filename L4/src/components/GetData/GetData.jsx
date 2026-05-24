import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

const GetData = () => {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const URL = "https://dummyjson.com/posts";
  console.log();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const result = await axios.get(URL);
      const newPosts = result.data.posts.map((post, index) => {
        return {
          ...post,
          status: index < 15,
        };
      });
      setDataList(newPosts);
      setIsLoading(false);
    };
    getData();
  }, []);

  const delete_post_fn = (id) => {
    setDataList(dataList.filter((post) => post.id !== id));
  };

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <div className="posts">
        {dataList.map((post) => {
          return (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <p>{String(post.status)}</p>
              <button onClick={() => delete_post_fn(post.id)} className="dlt">
                Удалить
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetData;
