import { Router } from 'express'
import CreateUserService from './services/CreateUserService'
import authenticated from '../../middlewares/authenticated'
import ChangePasswordService from './services/changePasswordService'

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

  return response.status(201).json({
    id,
    name,
    email,
    created_at,
    updated_at
  })
})

usersRouter.put('/', authenticated, async (request, response) => {
  const { id_user, password, newPassword } = request.body

  const changePassword = new ChangePasswordService()

  await changePassword.execute({
    id_user,
    password,
    newPassword
  })

  return response.json({ status: 'ok' })
})

export default usersRouter
