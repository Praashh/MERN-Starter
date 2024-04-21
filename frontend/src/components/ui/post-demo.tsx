import { postDescription, postImage, postTitle } from "@/store/atom/post";
import { useRecoilState } from "recoil";
import { Button } from "./button";
import axios from "axios";
import { toast } from "./use-toast";
import { useNavigate } from "react-router-dom";
import {  Loader2 } from "lucide-react";
import { useState } from "react";

const PostDemo = () => {
  const navigate = useNavigate();
  const [heading, setHeading] = useRecoilState<string>(postTitle);
  const [loading, setLoading] = useState<boolean>(false);  
  const [htmlContent, setHtmlContent] = useRecoilState<string>(postDescription);
  const [image, setImage] = useRecoilState<string>(postImage);
   
  const handleClick = async() => {
    setLoading(true);
    if(!heading || !htmlContent || !image){
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill all the fields",
      });
      setLoading(false);
      return;
    }
    try {
      const res = axios.post("http://localhost:3001/api/v1/post/create", {
      title: heading,
      content: htmlContent,
      userId: localStorage.getItem("user"),
    });
    console.log(heading, htmlContent, localStorage.getItem("user"));
    if((await res).status === 201){
      toast({
        title: "Post Created Successfully",
      });
    }
    setLoading(false);
    setHeading("");
    setHtmlContent("");
    setImage("");
    navigate("/");
    } catch (error) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred",
      });
    }
  }

  return (
    <div className="flex flex-col gap-5 items-start justify-evenly p-4 md:p-0 relative">
      <h1 className="text-2xl font-bold">Post Preview</h1>
      {heading && <h2 className="text-2xl font-extrabold">{heading}</h2>}
      {htmlContent && <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="w-96" />}
      {image && (
        <img
          src={URL.createObjectURL(new Blob([image]))}
          alt={"image"}
          height={500}
          width={500}
        />
      )}
      <Button variant={"default"} onClick={handleClick}>{!loading ?  "Create Post" : <Loader2 className="mr-2 h-4 w-4 animate-spin" /> }</Button>
    </div>
  );
};

export default PostDemo;
