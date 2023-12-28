import { Task } from "@modules/entities/Task";
import { TaskRepository } from "@modules/repositories/TaskRepository";
import AppError from "@shared/erros/AppError";
import { getCustomRepository } from "typeorm";

class ShowTaskService {
  public async execute(id: number): Promise<Task> {
    const taskRepository = getCustomRepository(TaskRepository);
    const task = await taskRepository.findOne(id);

    if (!task) {
      throw new AppError('Task not found.');
    }

    return task;
  }
}

export default ShowTaskService;
