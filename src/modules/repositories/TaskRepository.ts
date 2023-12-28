import { Task } from "@modules/entities/Task";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  public async findByName(name: string): Promise<Task | undefined> {
    const tasks = this.findOne({
      where: { name },
    });

    return tasks;
  }
}
