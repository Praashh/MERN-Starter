import FeedHero from "@/components/landing/FeedHero"
import Navbar from "@/components/ui/main-nav"
import { toast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Feed = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("token")){
          toast({
            variant: "destructive",
            title: "You are not logged in",
          });
            navigate("/signup");
        }
      }, [navigate]);
  return (
    <div>
        <Navbar/>
        <FeedHero/>
    </div>
  )
}

export default Feed
