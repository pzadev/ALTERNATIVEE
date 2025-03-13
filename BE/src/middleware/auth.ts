// import { Request, Response, NextFunction } from "express";
// import dotenv from "dotenv";
// import path from "path";

// const envPath = path.resolve(process.cwd(), ".env.deployment");
// dotenv.config({ path: envPath });

// const API_SECRET_KEY = process.env.API_SECRET_KEY || "";

// export const verifyApiKey = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): void => {
//   const clientKey = req.headers["x-api-key"];

//   if (!clientKey || clientKey !== API_SECRET_KEY) {
//     res.status(403).json({ error: "FORBIDDEN: Incorrect Key Provided" });
//     return;
//   }

//   next();
// };
