import { Github } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full mb-5">
        <Link to ="https://github.com/Praashh"><p className="flex items-center justify-center w-full gap-2">Copyright &copy; Praash <Github/> 2024</p></Link>
    </footer>
  )
}

export default Footer
