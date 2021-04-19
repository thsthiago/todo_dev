import { Router } from 'express'
import usersRouter from './usersRouter/users.routes'
import sessionsRouter from './usersRouter/sessions.routes'
import tasksRouter from './tasksRouter/tasks.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/tasks', tasksRouter)

export default routes
