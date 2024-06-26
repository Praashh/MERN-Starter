import express from "express";
import cors from "cors";
import rootRouter from "./routes/index";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:8080",
  credentials: true
}));

app.use(cookieParser())
app.use(express.json());

app.use("/api/v1", rootRouter);

app.get("/", (req, res) => {
  res.send("Working Fine");
})

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
