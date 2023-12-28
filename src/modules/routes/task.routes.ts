import TaskController from "@modules/controllers/TaskController";
import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

const tasksRouter = Router();
const taskController = new TaskController();

tasksRouter.get("/", taskController.index);

tasksRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  taskController.show
);

tasksRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      date: Joi.string()
        .pattern(/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/)
        .required(),
      time_start: Joi.string()
        .pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
        .required(),
      time_expected_end: Joi.string().pattern(
        /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/
      ),
      time_end: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/),
      status: Joi.string(),
    },
  }),
  taskController.create
);

tasksRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      date: Joi.string()
        .pattern(/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/)
        .required(),
      time_start: Joi.string()
        .pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
        .required(),
      time_expected_end: Joi.string()
        .pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
        .required(),
      time_end: Joi.string()
        .pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
        .required(),
      status: Joi.string().required(),
    },
  }),
  taskController.update
);

tasksRouter.patch(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      description: Joi.string(),
      date: Joi.string().pattern(
        /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
      ),
      time_start: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/),
      time_expected_end: Joi.string().pattern(
        /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/
      ),
      time_end: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/),
      status: Joi.string(),
    },
  }),
  taskController.update
);

tasksRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  taskController.destroy
);

export default tasksRouter;
