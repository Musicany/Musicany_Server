var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { connectDB } from "./db.js";
const app = express();
const port = 8080;
app.get("/users", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connectDB();
        const [rows] = yield db.execute("SELECT * FROM users");
        res.json(rows);
    }
    catch (error) {
        res.status(500).json({ error: "사용자 조회에 실패했습니다." });
    }
}));
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
