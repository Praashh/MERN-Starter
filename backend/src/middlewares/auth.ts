import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";


const authMiddleware = (req: Request, res: Response, next: () => void) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ error: "Token not provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is not defined");
    }
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
    req.body.userId = payload.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalid" });
  }
};

export { authMiddleware };
