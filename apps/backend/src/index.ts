import Fastify from "fastify";
import cors from "@fastify/cors";
import { itemsRoutes } from "./routes/items.route";

const server = Fastify({ logger: true });

server.register(cors, {
  origin: "http://localhost:5173", // autoriser le frnt
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

server.register(itemsRoutes, { prefix: '/api' });

server.get("/health", async () => {
  return { status: "ok" };
});

server.listen({ port: 4000, host: "0.0.0.0" }).then(() => {
  console.log("Backend is running on http://localhost:4000");
});