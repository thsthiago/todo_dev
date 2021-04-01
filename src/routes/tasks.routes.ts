import { Router } from 'express'
import authenticated from '../middlewares/authenticated'
import CreateTaskService from '../services/CreateTaskService'

const tasksRouter = Router()

tasksRouter.use(authenticated)

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
