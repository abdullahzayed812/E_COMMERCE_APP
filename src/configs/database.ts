import mysql from "mysql2/promise";

// DB Configuration for Dependency Injection
export class DBConfig {
  private static instance: DBConfig;
  private pool: mysql.Pool;

  private constructor() {
    try {
      this.pool = mysql.createPool({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "abdo",
        password: process.env.DB_PASSWORD || "password",
        database: process.env.DB_NAME || "e_commerce",
        waitForConnections: true, // Wait for an available connection if all are in use
        connectionLimit: 10, // Maximum number of connections allowed in the pool
        queueLimit: 0, // Unlimited waiting requests
      });
    } catch (error) {
      console.error("Failed to create DB connection pool:", error);
      throw new Error("Failed to initialize database connection pool");
    }
  }

  // Singleton pattern to ensure only one DBConfig instance
  public static getInstance(): DBConfig {
    if (!DBConfig.instance) {
      DBConfig.instance = new DBConfig();
    }
    return DBConfig.instance;
  }

  public getPool(): mysql.Pool {
    return this.pool;
  }

  public async closePool(): Promise<void> {
    try {
      await this.pool.end();
      console.log("Database connection pool closed.");
    } catch (error) {
      console.error("Error closing DB connection pool:", error);
    }
  }
}
