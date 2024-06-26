/* eslint-disable @typescript-eslint/no-explicit-any */
import ExperienceCard from "../ui/experience-card";
import { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { postsCache } from "@/store/atom/post";
import SearchPost from "../ui/SearchPost";

export default function FeedHero() {
  const [posts, setPosts] = useRecoilState(postsCache);
  
  useEffect(() => {
    if(posts.length > 0){
      return ;
    }
    async function getPosts() {
      const res = await axios.get(`${import.meta.env.VITE_HOST_URL}/api/v1/post/all`, {
        withCredentials:true
      });
      setPosts(res.data.posts);
    }
    getPosts();
    
  });
  const getDescription = (content: string) =>{
    const stringWithoutHtmlTags = content.replace(/<[^>]*>?/gm, '');
    return stringWithoutHtmlTags;
  }
  return (
    <>
      <div className=" py-6 w-full mt-14">
        <div className="px-4 flex flex-col gap-2 md:gap-4">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Interview Experiences
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed">
              Prepare for your next interview with insights from others who have
              been there.
            </p>
          </div>
        <SearchPost/>
        </div>
      </div>
      {!posts ?<>Loading...</>:
      <div className="container grid max-w-7xl items-start gap-6 px-4 py-8 md:grid-cols-2 md:py-16 lg:gap-10 lg:px-6 xl:gap-12">
        {posts.map((post: any) => (
          <ExperienceCard
            key={post.id}
            id={post.id}
            heading={post.title}
            description={getDescription(post.content)}
          />
        ))}
      </div>
      }
    </>
  );
}
