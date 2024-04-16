import { Link } from "react-router-dom";
// import { NavigationMenu } from "./navigation-menu";
import ProfileHeader from "./ProfileHeader";
import { MountainIcon } from "./nav-icon";
// import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  
  return (
    <nav className="inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex items-center" to={"/"}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          {/* <nav className="hidden md:flex gap-7">
           <NavigationMenu title="Write your experience" link="/write-new"/>
            <NavigationMenu title="Recent experiences" link="/recent"/>
            <NavigationMenu title="Your bookmarks" link="/bookmarks"/>
          </nav> */}
          <div className="flex gap-3 items-center">
          <ProfileHeader/>
          {/* <ModeToggle/> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

