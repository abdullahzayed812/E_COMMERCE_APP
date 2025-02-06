import { convertObjectKeysToCamelCase } from "./namingConvention";
import { DBConfig } from "../configs/database";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export class DBHelper {
  static async query<T = RowDataPacket[]>(
    sql: string,
    params: any[] = [],
    convertResultToCamelCase: boolean = true
  ): Promise<T> {
    const db = DBConfig.getInstance().getPool();
    const [rows] = await db.query<RowDataPacket[]>(sql, params);
    return (convertResultToCamelCase ? convertObjectKeysToCamelCase(rows) : rows) as T;
  }

  static async execute<T = ResultSetHeader>(sql: string, params: any[] = []): Promise<T> {
    const db = DBConfig.getInstance().getPool();
    const [result] = await db.query<ResultSetHeader>(sql, params);
    return result as T;
  }
}
