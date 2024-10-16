var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config(); // .env 파일에서 환경 변수 로드
const dbConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
};
export const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield mysql.createConnection(dbConfig);
        console.log("MySQL에 연결되었습니다!");
        return connection;
    }
    catch (error) {
        console.error("MySQL 연결에 실패했습니다: ", error);
        throw error;
    }
});
