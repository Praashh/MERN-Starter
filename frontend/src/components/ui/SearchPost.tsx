import { useState } from "react"
import { Input } from "./input"
import axios from "axios";
// import { SearchIcon } from "lucide-react";

const SearchPost = () => {
    const [item, setItem] = useState<string>("");
    const [showRes, setShowRes] = useState<boolean>(false);
    const [res, setRes] = useState<any[]>([]);

    console.log(item)
   
    let timeoutId:NodeJS.Timeout;

    async function handleChange (e:React.ChangeEvent<HTMLInputElement>){
        clearTimeout(timeoutId);

        const value = e.target.value;
        setItem(value);

        timeoutId = setTimeout(async () => {
            if(item){
                const res = await axios.get(`http://localhost:3001/api/v1/post/posts?title=${item}`);
                console.log("response", res.data);
                setShowRes(!showRes);
                setRes(res.data.posts);
            }
        }, 1000);
        console.log("result", res);
    }

    return (
        <div className="mx-auto w-[50%]">
            <div className="relative">
                {/* <SearchIcon/> */}
                <Input
                    className="pl-10"
                    placeholder="Search for a company or job title..."
                    type="search"
                    onChange={handleChange}
                />
            </div>
           {item && showRes && <div className="bg-red-900 h-48">
                {
                    res.map((i) =>{
                        return (
                            <div>{i.title}</div>
                        )
                    })
                }
            </div>}
        </div>
    )
}

export default SearchPost
