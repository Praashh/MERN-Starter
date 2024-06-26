import { useState } from "react"
import { Input } from "./input"
import axios from "axios";
import { Loader2 } from "lucide-react";
import { toast } from "./use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { Link } from "react-router-dom";

const SearchPost = () => {
    const [item, setItem] = useState<string>("");
    const [showRes, setShowRes] = useState<boolean>(false);
    const [res, setRes] = useState<any[]>([]);
    const [loading,setLoading] = useState<boolean>(false);

   
    let timeoutId:NodeJS.Timeout;

    async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLoading(true);
        clearTimeout(timeoutId);
    
        const value = e.target.value;
        setItem(value);
    
        timeoutId = setTimeout(async () => {
            if (value) {
                try {
                    const res = await axios.get(`${import.meta.env.VITE_HOST_URL}/api/v1/post/posts?title=${value}`, {withCredentials:true});
                    console.log(res.data);
                    
                    setRes(res.data.posts);
                } catch (error) {
                    setRes([]);
                    toast({
                        variant: "destructive",
                        title: "Error",
                        description: "An error occurred",
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                      });
                } finally {
                    setShowRes(true); 
                    setLoading(false);
                }
            } else {
                setShowRes(false); 
                setLoading(false); 
            }
        }, 1000);
    }
    
    return (
        <div className="mx-auto w-[50%] flex flex-col flex-wrap gap-5 justify-center p-5">
            <div className="relative">
                {/* <SearchIcon/> */}
                <Input
                    className="pl-10"
                    placeholder="Search for a company or job title..."
                    type="search"
                    onChange={handleChange}
                    />
            </div>
           {item && showRes&& <div className="bg-transparent rounded-lg border border-solid border-gray-200 shadow-lg min-h-48 p-3">
                <div>
                    {res.length>0?(
                        res.map((i)=>(
                            <Link to={`/post/${i.id}`} target="_blank" className="mt-2 duration-200 flex flex-col flex-wrap hover:text-black  hover:bg-slate-300 p-3 cursor-pointer rounded-lg">
                                {i.title}                          
                             </Link>
                        ))
                    ): <div>No similiar result found!!</div>}
               </div>
            </div>}
            {item && loading && <div className="flex justify-center items-center">Please Wait! Searching <Loader2 className="ml-2 h-8 w-8 animate-spin" /></div>}
        </div>
    )
}

export default SearchPost
