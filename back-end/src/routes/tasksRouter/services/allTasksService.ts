import { getRepository } from 'typeorm'
import Task from '../../../models/Tasks'

class AllTasksService {
  public async execute (id_user: string): Promise<Task[]> {
    const getAllTasks = getRepository(Task)

    const tasks = await getAllTasks.find({ where: { id_user } })

    return tasks
  }
}

export default AllTasksService
