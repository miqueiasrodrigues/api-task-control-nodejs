import { Task } from "@modules/entities/Task";
import { IUpdateTask } from "@modules/interfaces/task.interface";
import { TaskRepository } from "@modules/repositories/TaskRepository";
import AppError from "@shared/erros/AppError";
import { getCustomRepository } from "typeorm";

class UpdateTaskService {
  public async execute(data: IUpdateTask): Promise<Task> {
    const {
      id,
      name,
      description,
      date,
      time_start,
      time_expected_end,
      time_end,
      status,
    } = data;

    const taskRepository = getCustomRepository(TaskRepository);
    let task = await taskRepository.findOne(id);

    if (!task) {
      throw new AppError("Task not found.");
    }

    task.name = name || task.name;
    task.description = description || task.description;
    task.date = date || task.date;
    task.time_start = time_start || task.time_start;
    task.time_expected_end = time_expected_end || task.time_expected_end;
    task.time_end = time_end || task.time_end;
    task.status = status || task.status;

    task = await taskRepository.save(task);

    return task;
  }
}

export default UpdateTaskService;
