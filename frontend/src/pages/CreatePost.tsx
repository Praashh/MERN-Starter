import Navbar from '@/components/ui/main-nav';
import { toast } from '@/components/ui/use-toast';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
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
    </div>
  )
}

export default CreatePost
