import { useState } from 'react'
import { Button } from './button';
import { Link } from 'react-router-dom';

const ProfileHeader = () => {
    const [user, setUser] = useState<string | null>(localStorage.getItem("user"));
  return (
    <div className="flex items-center gap-4">
            {user ? (
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  localStorage.removeItem("user");
                  setUser(null);
                }}
              >
                Sign out
              </Button>
            ) : (
              <>
                {localStorage.getItem("token") ? (
                  <Link to="/login" className="hidden md:block">
                    <Button size="sm" variant="outline">
                      Login
                    </Button>
                  </Link>
                ) : (
                  <Link to="/signup" className="hidden md:block">
                    <Button size="sm">Sign up</Button>
                  </Link>
                )}
              </>
            )}
          </div>
  )
}

export default ProfileHeader
