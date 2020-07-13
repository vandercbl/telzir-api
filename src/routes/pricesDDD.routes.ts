import { Router } from 'express'

import PricesDDDController from '../controllers/PricesDDDController'

const priceDDDRouter = Router()

priceDDDRouter.get('/', PricesDDDController.all)
priceDDDRouter.post('/', PricesDDDController.add)

export default priceDDDRouter
