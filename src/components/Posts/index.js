import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AllPosts from "./AllPosts";
import Pagination from "../Pagination";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indOfLastPost = currentPage * postsPerPage; // (1*10 = 10)
  const indOfFirstPost = indOfLastPost - postsPerPage; // (10-10 = 0)
  const currentPosts = posts.slice(indOfFirstPost, indOfLastPost); //(0,10)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(posts);
  return (
    <div>
      Hello posts pagination
      <div className="container mt-5">
        <AllPosts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Posts;
