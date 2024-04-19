import TextEditor from "../ui/editor"
import PostDemo from "../ui/post-demo"

const NewPost = () => {
  return (
    <div className="mt-10 flex justify-evenly flex-wrap items-center min-h-screen w-full">
        <TextEditor/>
        <PostDemo/>
    </div>
  )
}

export default NewPost
