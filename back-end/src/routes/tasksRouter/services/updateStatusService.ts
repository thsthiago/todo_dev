import { getRepository } from 'typeorm'
import Task from '../../../models/Tasks'

class UpdateStatusService {
  public async execute (id_task: string): Promise<void> {
    const taskStatus = getRepository(Task)
    await taskStatus.update(id_task, { status: 'complete' })
  }
}

export default UpdateStatusService
