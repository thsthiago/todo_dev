import 'reflect-metadata'

import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import 'express-async-errors'

import './database'
import routes from './routes'
import AppError from './errors/appError'
import config from './config/auth'

const app = express()

const options: cors.CorsOptions = {
  origin: config.url.origin
}

app.use(cors(options))
app.use(express.json())
app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

app.listen(3333, () => {
  console.log('Server started')
})
