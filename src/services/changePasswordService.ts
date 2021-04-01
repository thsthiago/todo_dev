import { getRepository } from 'typeorm'
import User from '../models/User'
import { compare, hash } from 'bcryptjs'
import AppError from '../errors/appError'

interface Request {
  id_user: string;
  password: string;
  newPassword: string;
}

class ChangePasswordService {
  public async execute ({ id_user, password, newPassword }: Request): Promise<void> {
    const passwordRepository = getRepository(User)

    const user = await passwordRepository.findOne(id_user)
    const hashPassword = user?.password as string
    const passwordMatched = await compare(password, hashPassword)

    if (!passwordMatched) {
      throw new AppError('Invalid password', 202)
    }

    const newHash = await hash(newPassword, 10)

    const saveUser = {
      ...user,
      password: newHash
    }

    await passwordRepository.save(saveUser)
  }
}

export default ChangePasswordService
