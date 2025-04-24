import http from "http";
import { Redis } from "ioredis";
import pg from "pg";
import app from "./app/server";

async function init() {
  try {
    console.log("Connecting to Redis...");
    const redis = new Redis("redis://redis:6379", { lazyConnect: true });
    await redis.connect();
    console.log("Connected to Redis Successfully...!");

    console.log("Connecting to Postgres....");

    const { Client } = pg;

    const client = new Client({
      host: "db",
      port: 5432,
      database: "postgres",
      user: "postgres",
      password: "postgres",
    });
    await client.connect();

    console.log("Coneected to Postgres ....!");

    const PORT = process.env.PORT ? +process.env.PORT : 8000;
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`HTTP server is listening on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(`Error starting server`, error);
  }
}

init();