import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import { app, server } from "./socket/socket.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
dotenv.config();

const PORT = process.env.PORT || 4000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/cliente/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/cliente/dist/index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
