import express from "express";
import userRouter from "./user"
import postRouter from "./post"
const router = express.Router();


router.use("/user", userRouter);
router.use("/post", postRouter);

export default router;