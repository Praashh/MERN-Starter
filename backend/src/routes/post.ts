import express from "express";
import { authMiddleware } from "../middlewares/auth";
import { CreatePost, GetAllPost, GetPostByID, SearchPost } from "../controllers/post";

const router = express.Router();

router.post("/create", authMiddleware, CreatePost);
router.get("/posts", authMiddleware, SearchPost)
router.get("/posts/:id", authMiddleware, GetPostByID)
router.get("/all", GetAllPost);

export default router;
