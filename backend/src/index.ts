import express, { Request, Response } from "express";
import cors from "cors";
import rootRouter from "./routes/index";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
