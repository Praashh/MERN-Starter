import express from "express";
import { Request, Response } from "express";
import z from "zod";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middlewares/auth";
import jwt from "jsonwebtoken";
import { sendEmail } from "../lib/resend";

const prisma = new PrismaClient();

const userSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const user = userSchema.parse(req.body);
    const newUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
    const token = jwt.sign(
      { id: newUser.id },
      process.env.JWT_SECRET as string
    );
    // const isEmailSent = await sendEmail(user.email);
    
    // if (!isEmailSent.success) {
    //   return res.status(500).json({ error: "Error sending email" });
    // }
    res.status(201).json({ token: token, user: newUser });
  } catch (error: unknown) {
    const zodError = error as z.ZodError;
    res.status(400).json({ error: zodError.errors });
  }
});

router.post("/login", authMiddleware, async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({
    where: {
      email: email,
      password: password,
    },
  });
  if (!user) {
    return res.status(400).json({ error: "Invalid email or password" });
  }
  res.status(200).json({ user, msg: "Login successful" });
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  res.status(200).json({ user });
});

export default router;
