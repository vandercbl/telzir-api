/* eslint-disable import/extensions */
import { Request, Response } from 'express'

import User from '../models/User'

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
      res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({ message: 'Falha no registro', error })
    }
  }
}

export default UsersController
