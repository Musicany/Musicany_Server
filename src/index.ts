import express, { Request, Response } from "express";
import { connectDB } from "./db.js";

const app = express();
const port = 8080;

app.get("/users", async (_req: Request, res: Response) => {
  try {
    const db = await connectDB();
    const [rows] = await db.execute("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "사용자 조회에 실패했습니다." });
  }
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
