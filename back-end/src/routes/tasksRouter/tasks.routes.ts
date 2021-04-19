import { Router } from 'express'
import authenticated from '../../middlewares/authenticated'
import AllTasksService from './services/allTasksService'
import CreateTaskService from './services/CreateTaskService'
import DeleteTask from './services/deleteTaskService'
import UpdateStatusService from './services/updateStatusService'

const tasksRouter = Router()

tasksRouter.use(authenticated)

tasksRouter.get('/', async (request, response) => {
  const { id_user } = request.query

  const getAllTasks = new AllTasksService()

  const tasks = await getAllTasks.execute(id_user as string)

  return response.json(tasks)
})

tasksRouter.post('/', async (request, response) => {
  const { id_user, tasks, deadline, status } = request.body

  const createTask = new CreateTaskService()

  const task = await createTask.execute({
    id_user,
    tasks,
    deadline,
    status
  })

  return response.json(task)
})

tasksRouter.delete('/:id_task', async (request, response) => {
  const { id_task } = request.params

  const deleteTask = new DeleteTask()

  await deleteTask.execute(id_task as string)

  return response.status(200).send('')
})

tasksRouter.patch('/:id_task', async (request, response) => {
  const { id_task } = request.params
  const { status } = request.body

  const updateStatus = new UpdateStatusService()
  await updateStatus.execute({ id_task, status })

  return response.status(200).send('')
})

export default tasksRouter
