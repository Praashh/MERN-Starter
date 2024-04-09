import express from "express";
import { Request, Response } from "express";
import z from "zod";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const postSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(6),
});

const router = express.Router();

router.post("/create", async (req: Request, res: Response) => {
        const body = req.body;
        console.log(body);
    try {
        const post = postSchema.parse(req.body);
        const newPost = await prisma.post.create({
            data: {
                title: post.title,
                content: post.content,
                author: { connect: { id: body.userId } }, 
            },
        });
        res.status(201).json({ post: newPost, msg: "Post created successfully"});
    } catch (error: unknown) {
        const zodError = error as z.ZodError;
        res.status(400).json({ error: zodError.errors });
    }
});

export default router;