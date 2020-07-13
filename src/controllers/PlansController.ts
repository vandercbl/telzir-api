/* eslint-disable import/extensions */
import { Response, Request } from 'express'

import Plan from '../models/Plan'

class PlansController {
  static async all(req: Request, res: Response): Promise<void> {
    const plans = await Plan.find()
    res.status(200).json(plans)
  }

  static async add(req: Request, res: Response): Promise<Response | void> {
    const { name } = req.body
    try {
      if (await Plan.findOne({ name }))
        return res
          .status(400)
          .json({ error: 'Já existe um plano com esse nome' })

      const plan = await Plan.create(req.body)
      res.status(200).json(plan)
    } catch (error) {
      return res.status(400).json({ message: 'Falha no registro', error })
    }
  }
}

export default PlansController
