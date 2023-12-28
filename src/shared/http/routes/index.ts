import tasksRouter from "@modules/routes/task.routes";
import { Router, Request, Response } from "express";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Hello World" });
});

routes.use("/task", tasksRouter);

export default routes;
