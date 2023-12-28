import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import { createConnection } from "typeorm";
import routes from "./routes";
import AppError from "@shared/erros/AppError";
import { errors } from "celebrate";

const port: number = 3003;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.use(
  (
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ): any => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

createConnection()
  .then(() => {
    console.log("TypeORM connected to the database");

    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error initializing TypeORM:", error.message);
  });
