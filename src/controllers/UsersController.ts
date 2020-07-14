/* eslint-disable import/extensions */
import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import authConfig from '../config/auth.json'

import User from '../models/User'

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    // vai expirar em um dia. Está em segundos
    expiresIn: 86400,
  })
}

class UsersController {
  static async all(req: Request, res: Response): Promise<void> {
    const users = await User.find()
    res.status(200).json(users)
  }

  static async add(req: Request, res: Response): Promise<Response | void> {
    const { email } = req.body
    try {
      if (await User.findOne({ email }))
        return res
          .status(400)
          .json({ error: 'Já existe um usuário com esse e-mail' })

      const user = await User.create(req.body)
      user.password = undefined
      // para não retornar a senha na resposta(mesmo ela estando encriptografada)
      res.status(200).json({ user, token: generateToken({ id: user._id }) })
    } catch (error) {
      return res.status(400).json({ message: 'Falha no registro', error })
    }
  }

  static async authenticate(
    req: Request,
    res: Response,
  ): Promise<Response | void> {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if (!user) return res.status(200).json({ message: 'Usuário não existe' })

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(200).json({ message: 'Senha inválida' })

    user.password = undefined

    res.status(200).json({ user, token: generateToken({ id: user._id }) })
  }
}

export default UsersController
