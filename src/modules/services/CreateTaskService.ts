import { Task } from "@modules/entities/Task";
import { ICreateTask } from "@modules/interfaces/task.interface";
import { TaskRepository } from "@modules/repositories/TaskRepository";
import { getCustomRepository } from "typeorm";

class CreateTaskService {
  public async execute(data: ICreateTask): Promise<Task> {
    const taskRepository = getCustomRepository(TaskRepository);
    const task = taskRepository.create(data);
    
    await taskRepository.save(task);
    
    return task;
  }
}

export default CreateTaskService;
