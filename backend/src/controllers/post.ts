import { postSchema } from "../zodSchema/postSchema";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import z from "zod";
const prisma = new PrismaClient();

export async function CreatePost (req: Request, res: Response) {
    const body = req.body;
    console.log(body);
    
    const { success } = postSchema.safeParse(req.body);
    if (success) {
      try {
        // Upload image on S3
        const newPost = await prisma.post.create({
          data: {
            title: body.title,
            content: body.content,
            // send to the DB
            author: { connect: { id: body.userId } },
          },
        });
        res.status(201).json({ post: newPost, msg: "Post created successfully" });
      } catch (error: unknown) {
        const zodError = error as z.ZodError;
        res.status(400).json({ error: zodError.errors });
      }
    } else {
      res.status(400).json({ error: "Invalid input" });
    }
  }

  export async function SearchPost (req:Request, res:Response) {
    // need to convert the string to lowercase to optimization
    const posts = await prisma.post.findMany({
      where: {
        OR: [
          { title: { contains: req.query.title as string } }, 
          {company: {contains: req.query.company as string}}
        ],
      },
    });
    // console.log(posts);
    return res.json({posts})
  }

  export async function GetPostByID (req:Request, res:Response){
    try {
      const post = await prisma.post.findUnique({
        where: {
          id: req.params.id
        }
      });
      console.log(post);
      res.status(200).json({post})
    } catch (error) {
       console.log(error);
       res.status(400).json({msg:"Something Went Wrong!"})
    }
  }

  export async function GetAllPost (req: Request, res: Response)  {
    try {
      const posts = await prisma.post.findMany();
      res.status(200).json({ posts });
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  }