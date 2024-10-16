import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // .env 파일에서 환경 변수 로드

const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

export const connectDB = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log("MySQL에 연결되었습니다!");
    return connection;
  } catch (error) {
    console.error("MySQL 연결에 실패했습니다: ", error);
    throw error;
  }
};
