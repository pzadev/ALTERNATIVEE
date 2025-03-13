import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import directoryRouter from "./routes/directoryR";
import itemRouter from "./routes/itemR";

if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: "./.env.test" });
} else {
  dotenv.config({ path: "./.env.deployment" });
}

const mongoUri = process.env.MONGODB_URI || "";

const app = express();
app.use(express.json());

const allowedOrigins = ["http://localhost:5173", "http://localhost:1901"];

allowedOrigins.forEach((domain) => {
  console.log(domain);
});
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PATCH"],
  })
);

app.use("/api/directory", directoryRouter);
app.use("/api/items", itemRouter);

const startServer = async () => {
  try {
    await mongoose.connect(mongoUri, {});
    console.log("Connected to MongoDB");

    const PORT = process.env.PORT || 1901;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

if (process.env.NODE_ENV !== "test") {
  startServer();
}

export default app;
