import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello World"});
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
