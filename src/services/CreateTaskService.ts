import { getRepository } from 'typeorm'
import Task from '../models/Tasks'

interface Request {
  id_user: string;
  tasks: string;
  deadline: string;
  status: 'complete' | 'incomplete'
}

class CreateTaskService {
  public async execute ({ id_user, tasks, deadline, status }: Request): Promise<Task> {
    const taskRepository = getRepository(Task)

    const taskComplete = taskRepository.create({
      id_user,
      tasks,
      deadline,
      status
    })

    await taskRepository.save(taskComplete)

    return taskComplete
  }
}

export default CreateTaskService
