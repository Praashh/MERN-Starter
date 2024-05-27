import express from "express";
import { Request, Response } from "express";
import {z} from "zod";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middlewares/auth";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendEmail } from "../lib/resend";
import { userSchema } from "../zodSchema/userSchema";

const prisma = new PrismaClient();

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  const {success} = userSchema.safeParse(req.body);
  if(!success){
    res.status(403).json({msg:"Inputs are incorrect"});
  }else{
    try {
      const isUserExists = await prisma.user.findUnique({
        where:{
          name: req.body.name,
          email: req.body.email,
        }
      });

      if(isUserExists){
        res.status(400).json({msg:"User already Exists!"});
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = await prisma.user.create({
        data: {
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
        },
      });
      const token = jwt.sign(
        { id: newUser.id },
        process.env.JWT_SECRET as string
      );
      /*const isEmailSent = await sendEmail(req.body.email);
      
      if (!isEmailSent.success) {
        return res.status(500).json({ error: "Error sending email" });
      }*/
      res.status(201).json({ token: token, user: newUser });
    } catch (error: unknown) {
      const zodError = error as z.ZodError;
      res.status(400).json({ error: zodError.errors });
    }
  }

});

router.post("/login", authMiddleware, async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (!user) {
    return res.status(400).json({ error: "Invalid email!" });
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ error: "Invalid  password!" });
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
