import { Router } from 'express'
import CreateUserService from '../services/CreateUserService'

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body

  const createUser = new CreateUserService()

  const user = await createUser.execute({
    name,
    email,
    password
  })

  const { id, created_at, updated_at } = user

  return response.json({
    id,
    name,
    email,
    created_at,
    updated_at
  })
})

export default usersRouter
