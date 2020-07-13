import { Router } from 'express'
import authMiddleware from '../middlewares/auth'

import PricesDDDController from '../controllers/PricesDDDController'

const priceDDDRouter = Router()

priceDDDRouter.use(authMiddleware)

priceDDDRouter.get('/', PricesDDDController.all)
priceDDDRouter.post('/', PricesDDDController.add)

export default priceDDDRouter
