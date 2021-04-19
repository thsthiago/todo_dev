import { getRepository } from 'typeorm'
import Task from '../../../models/Tasks'

class DeleteTask {
  public async execute (id_task: string): Promise<void> {
    const deleteTask = getRepository(Task)

    deleteTask.delete({ id: id_task })
  }
}

export default DeleteTask
