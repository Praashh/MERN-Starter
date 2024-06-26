import express from "express";
import { authMiddleware } from "../middlewares/auth";
import { Login, Logout, Profile, Register, deleteAccount } from "../controllers/user";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);
router.delete("/delete/:id", deleteAccount);
router.get("/me", authMiddleware, Profile)

export default router;
