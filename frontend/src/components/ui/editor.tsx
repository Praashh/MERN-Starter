/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Upload } from "lucide-react";
import { Input } from "./input";
import { useRecoilState } from "recoil";
import { postDescription, postTitle, postImage } from "@/store/atom/post";

const TextEditor = () => {
  const [value, setValue] = useRecoilState(postDescription);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [heading, setHeading] = useRecoilState(postTitle);
  const [image, setImage] = useRecoilState(postImage);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    imageRef?.current?.click();
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (text: any) => {
    setValue(text);
    console.log(value, image, heading);
  };
  return (
    <div className="w-full md:w-1/2 h-screen flex flex-col justify-evenly p-2 mt-10 md:mt-0 md:m-2">
      
    <Input x-chunk="dashboard-07-chunk-3" placeholder="Title of Post" onChange={(e) => setHeading(e.target.value)} value={heading}/>
      <ReactQuill theme={"snow"} onChange={handleChange} className="h-[50vh]" placeholder="Content Of Post" value={value}/>
      <Card className="overflow-hidden mt-24 md:mt-10" x-chunk="dashboard-07-chunk-4">
        <CardHeader>
          <CardTitle>Select Images</CardTitle>
          <CardDescription>
            Upload images to be used in your post.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <button className="flex aspect-square w-full h-20 items-center justify-center rounded-md border border-dashed" onClick={handleClick}>
            <Upload className="h-4 w-4 text-muted-foreground" />
            <input type="file" className="hidden" ref={imageRef} onChange={
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (e:any) => {
                setImage(e?.target?.files?.[0]);
              }
            
            }/>
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TextEditor;
