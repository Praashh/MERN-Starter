import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

interface PostShowProps{
    title:string;
    content:string;
}
export default function PostShow({title, content}:PostShowProps) {
  return (
    <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
      <div className="relative h-[400px] overflow-hidden rounded-lg mb-8">
        <img
          src="https://github.com/shadcn.png"
          alt="Featured Image"
          width={1200}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <div className="flex items-center space-x-4 text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src="/placeholder-user.jpg" />
              {/* <AvatarFallback>SC</AvatarFallback> */}
            </Avatar>
            {/* <span>Praash</span> */}
          </div>
          {/* <span>|</span> */}
          {/* <time dateTime="2023-06-26">June 26, 2023</time> */}
        </div>
        <p>
            {content}
        </p>
      </div>
    </article>
  )
}