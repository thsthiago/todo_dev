import {
  NextFunction,
  Request,
  Response
} from 'express'
import { verify } from 'jsonwebtoken'
import AppError from '../errors/appError'
import authConfig from '../config/auth'

function authenticated (request: Request, response: Response, next: NextFunction): void {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401)
  }

  const [, token] = authHeader.split(' ')

  verify(token, authConfig.jwt.secret, (err) => {
    if (err) {
      throw new AppError('Invalid JWT token', 401)
    }

    return next()
  })
}

export default authenticated
