import { Request, Response } from 'express'

import PriceDDD from '../models/PriceDDD'

class PricesDDDController {
  static async all(req: Request, res: Response): Promise<void> {
    const pricesDDD = await PriceDDD.find()
    res.status(200).json(pricesDDD)
  }

  static async add(req: Request, res: Response): Promise<Response | void> {
    const { origin, destiny } = req.body
    try {
      if (await PriceDDD.findOne({ origin, destiny }))
        return res.status(400).json({
          error: 'Já existe um preço para esses DDDs de origem e destino',
        })

      const priceDDD = await PriceDDD.create(req.body)
      res.status(200).json(priceDDD)
    } catch (error) {
      return res.status(400).json({ message: 'Falha no registro', error })
    }
  }

  static async delete(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params

    const rows = await PriceDDD.deleteOne({ _id: id }).catch(error =>
      res.status(400).json({ message: 'Falha na operação', error }),
    )

    if (rows.deletedCount < 1) {
      return res
        .status(400)
        .json({ rows, message: 'Nenhum preço de DDD foi excluído' })
    }
    return res
      .status(200)
      .json({ message: 'Preço de DDD excluído com sucesso' })
  }

  static async update(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params
    const priceDDDAlt = req.body
    try {
      const rows = await PriceDDD.updateOne({ _id: id }, priceDDDAlt)
      if (rows.n < 1) {
        return res
          .status(400)
          .json({ rows, message: 'Nenhum registro foi alterado' })
      }
      const priceDDD = await PriceDDD.findOne({ _id: id })
      return res.status(200).json(priceDDD)
    } catch (error) {
      return res.status(400).json({ message: 'Falha na operação', error })
    }
  }
}

export default PricesDDDController
