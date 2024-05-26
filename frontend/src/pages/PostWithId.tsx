import { useParams } from "react-router-dom"

const PostWithId = () => {
    const {id} = useParams();
    console.log(id);
    
  return (
    <div>
       {id}
    </div>
  )
}

export default PostWithId
