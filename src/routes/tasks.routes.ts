import { Router } from 'express'
import authenticated from '../middlewares/authenticated'
import AllTasksService from '../services/allTasksService'
import CreateTaskService from '../services/CreateTaskService'

const tasksRouter = Router()

tasksRouter.use(authenticated)

tasksRouter.get('/', async (request, response) => {
  const { id_user } = request.body

  const getAllTasks = new AllTasksService()

  const tasks = await getAllTasks.execute(id_user)

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

export default tasksRouter
