import { Link } from "react-router-dom"
type NavigationMenuProps = {
    title: string;
    link: string;
}
export const NavigationMenu = ({title, link}:NavigationMenuProps) => {
  return (
    <Link
    className="font-medium flex items-center text-sm transition-colors duration-200 hover:underline"
    to={link}
  >
    {title}
  </Link>
  )
}

 
