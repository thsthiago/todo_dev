import { getRepository } from 'typeorm'
import Task from '../../../models/Tasks'

interface updateData {
  id_task: string;
  status: 'complete' | 'incomplete';
}

class UpdateStatusService {
  public async execute ({ id_task, status }: updateData): Promise<void> {
    const taskStatus = getRepository(Task)
    await taskStatus.update(id_task, { status: status })
  }
}

export default UpdateStatusService
