import FeedHero from "@/components/landing/FeedHero"
import Navbar from "@/components/ui/main-nav"
import { toast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
// @ts-ignore
  const [isUSer, setIsUser] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem("user")){
      setIsUser(true);
    }else{
      toast({
        variant: "destructive",
        title: "You are not logged in",
      });
        navigate("/signup");
    }
  });

  return (
    <div>
        <Navbar/>
        <FeedHero/>
    </div>
  )
}

export default Feed
