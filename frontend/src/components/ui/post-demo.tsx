import { postDescription, postImage, postTitle } from "@/store/atom/post";
import { useRecoilValue } from "recoil";
import { Button } from "./button";
import axios from "axios";
import { toast } from "./use-toast";

const PostDemo = () => {
  const heading = useRecoilValue(postTitle);
  const htmlContent = useRecoilValue(postDescription);
  const image = useRecoilValue(postImage);
   
  const handleClick = async() => {
    const res = axios.post("http://localhost:3001/api/v1/post/create", {
      title: heading,
      content: htmlContent,
      userId: "clv6bupf60002jnqhnsnfz9nd"
    });
    if((await res).status === 201){
      toast({
        title: "Post Created Successfully",
      });
    }
    console.log(res);
  }

  return (
    <div className="flex flex-col gap-5 items-start justify-evenly p-4 md:p-0">
      <h1 className="text-2xl font-bold">Post Preview</h1>
      {heading && <h2 className="text-2xl font-extrabold">{heading}</h2>}
      {htmlContent && <div dangerouslySetInnerHTML={{ __html: htmlContent }} />}
      {image && (
        <img
          src={URL.createObjectURL(new Blob([image]))}
          alt={"image"}
          height={500}
          width={500}
        />
      )}
      <Button variant={"default"} onClick={handleClick}>Create Post</Button>
    </div>
  );
};

export default PostDemo;
