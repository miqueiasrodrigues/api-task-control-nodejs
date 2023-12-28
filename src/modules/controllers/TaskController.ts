import CreateTaskService from "@modules/services/CreateTaskService";
import DeleteTaskService from "@modules/services/DeleteTaskService";
import ListTaskService from "@modules/services/ListTaskService";
import ShowTaskService from "@modules/services/ShowTaskService";
import UpdateTaskService from "@modules/services/UpdateTaskService";
import { Request, Response } from "express";

class TaskController {
  public async index(request: Request, response: Response) {
    const listService = new ListTaskService();
    const tasks = await listService.execute();

    return response.json(tasks);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;
    const showService = new ShowTaskService();
    const task = await showService.execute(parseInt(id));

    return response.json(task);
  }

  public async create(request: Request, response: Response) {
    const {
      name,
      description,
      date,
      time_start,
      time_expected_end,
      time_end,
      status,
    } = request.body;

    const createService = new CreateTaskService();
    const task = await createService.execute({
      name,
      description,
      date,
      time_start,
      time_expected_end,
      time_end,
      status,
    });

    return response.json(task);
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const {
      name,
      description,
      date,
      time_start,
      time_expected_end,
      time_end,
      status,
    } = request.body;

    const updateService = new UpdateTaskService();

    const task = await updateService.execute(
      {
        id,
        name,
        description,
        date,
        time_start,
        time_expected_end,
        time_end,
        status,
      }
    );

    return response.json(task);
  }

  public async destroy(request: Request, response: Response) {
    const { id } = request.params;
    const deleteTaskService = new DeleteTaskService();
    await deleteTaskService.execute(parseInt(id));

    return response.json({});
  }
}

export default TaskController;
