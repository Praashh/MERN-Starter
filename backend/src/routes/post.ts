import express from "express";
import { Request, Response } from "express";
import z from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const postSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(5),
});

const router = express.Router();

router.post("/create", async (req: Request, res: Response) => {
  const body = req.body;
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
});

router.get("/all", async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

export default router;
