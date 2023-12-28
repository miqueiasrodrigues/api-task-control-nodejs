import { Task } from "@modules/entities/Task";
import { TaskRepository } from "@modules/repositories/TaskRepository";
import { getCustomRepository } from "typeorm";

class ListTaskService {
  public async execute(): Promise<Task[]> {
    const taskRepository = getCustomRepository(TaskRepository);
    
    const tasks = await taskRepository.find();

    return tasks;
  }
}

export default ListTaskService;