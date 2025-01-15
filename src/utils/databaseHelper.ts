// src/utils/dbHelper.ts
import { convertObjectKeysToCamelCase, convertObjectKeysToSnakeCase } from "./namingConvention";
import { DBConfig } from "../configs/database";

export class DBHelper {
  static async query(sql: string, params: any[], convertResultToCamelCase: boolean = true) {
    const db = DBConfig.getInstance().getPool();
    const [rows] = await db.query(sql, params);
    return convertResultToCamelCase ? convertObjectKeysToCamelCase(rows) : rows;
  }

  static async execute(sql: string, params: any[]) {
    const db = DBConfig.getInstance().getPool();
    return db.query(sql, params);
  }
}
