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
}

export default PricesDDDController
