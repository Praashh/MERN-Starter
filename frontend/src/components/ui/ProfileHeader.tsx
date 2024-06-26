import { useEffect, useState } from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProfileHeader = () => {
  const [isUSer, setIsUser] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem("user")){
      setIsUser(true);
    }
  })
  return (
    <div className="flex items-center gap-4">
      {isUSer ? (
        <Button
          size="sm"
          variant="outline"
          onClick={async ()=>{
            const response = await axios.post(
              `${import.meta.env.VITE_HOST_URL}/api/v1/user/logout`,
              { email:"email", password:"password" },
              { withCredentials: true }
            );
            if(response.status === 200){
              localStorage.setItem("user", "")
              window.location.reload();
            }else{
              alert("something went wrong");
            }
          }}
        >
          Sign out
        </Button>
      ) : (
        <Link to="/signup" className="hidden md:block">
          <Button size="sm">Sign up</Button>
        </Link>
      )}
    </div>
  );
};

export default ProfileHeader;
