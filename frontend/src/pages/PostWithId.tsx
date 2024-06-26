import PostShow from "@/components/landing/PostLanding";
import Navbar from "@/components/ui/main-nav";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

type Post = {
  id: string;
  title: string;
  content: string;
}
const PostWithId = () => {
  const { id } = useParams();
  console.log(id);
  const [post, setPosts] = useState<Post>({ id: "", title: "", content: "" });

  useEffect(() => {
    async function fetchPost() {
      const res = await axios.get(`${import.meta.env.VITE_HOST_URL}/api/v1/post/posts/${id}`, { withCredentials: true });
      console.log(res);
      setPosts(res.data.post)
    }
    fetchPost();
  }, [])
  return (
    <>
      <Navbar/>
    <div className="mt-20">
      <PostShow title={post.title} content={post.content} />
    </div>
    </>
  )
}

export default PostWithId
