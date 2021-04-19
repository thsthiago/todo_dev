import { Router } from 'express'
import AuthenticateUserService from '../../services/AuthenticateUserService'

const sessionsRouter = Router()

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body

  const createSession = new AuthenticateUserService()

  const { user, token } = await createSession.execute({
    email,
    password
  })

  const { id, name } = user

  return response.json(
    {
      user: {
        id,
        name
      },
      token
    }
  )
})

export default sessionsRouter
