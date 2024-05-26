import { Link } from "react-router-dom"

interface ExperienceCardProps {
 heading: string;
 company?: string;
 description: string;   
 id:string   
}

const ExperienceCard = ({heading, company, description, id}: ExperienceCardProps) => {
  return (
    <Link
    className="border border-gray-200 rounded-lg grid w-full p-4 gap-4 text-start hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
    to={`/post/${id}`}
  >
    <div className="space-y-1">
      <h2 className="text-xl font-semibold">{heading}</h2>
      <p className="text-sm text-cyan-300 ">{company}</p>
    </div>
    <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
      "{description}"
    </p>
  </Link>
  )
}

export default ExperienceCard
