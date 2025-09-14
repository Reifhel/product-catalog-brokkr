import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2";
import { schema } from "./schema/index.ts";

export const sql = mysql.createConnection(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema, mode: "default" });
