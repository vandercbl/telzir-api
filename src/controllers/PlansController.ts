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

  static async delete(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params

    const rows = await Plan.deleteOne({ _id: id }).catch(error =>
      res.status(400).json({ message: 'Falha na operação', error }),
    )
    if (rows.deletedCount < 1) {
      return res
        .status(400)
        .json({ rows, message: 'Nenhum plano foi excluído' })
    }
    return res.status(200).json({ message: 'Plano excluído com sucesso' })
  }

  static async update(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params
    const planAlt = req.body
    try {
      const rows = await Plan.updateOne({ _id: id }, planAlt)
      if (rows.n < 1) {
        return res
          .status(400)
          .json({ rows, message: 'Nenhum plano foi alterado' })
      }
      const plan = await Plan.findOne({ _id: id })
      return res.status(200).json(plan)
    } catch (error) {
      return res.status(400).json({ message: 'Falha na operação', error })
    }
  }
}

export default PlansController
