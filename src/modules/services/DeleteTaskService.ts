import { Task } from "@modules/entities/Task";
import { TaskRepository } from "@modules/repositories/TaskRepository";
import AppError from "@shared/erros/AppError";
import { getCustomRepository } from "typeorm";

class DeleteTaskService {
  public async execute(id: number): Promise<void> {
    const taskRepository = getCustomRepository(TaskRepository);
    const task = await taskRepository.findOne(id);

    if (!task) {
      throw new AppError("Task not found.");
    }

    await taskRepository.remove(task);
  }
}

export default DeleteTaskService;
