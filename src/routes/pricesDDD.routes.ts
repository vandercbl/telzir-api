import { Router } from 'express'
import authMiddleware from '../middlewares/auth'

import PricesDDDController from '../controllers/PricesDDDController'

const priceDDDRouter = Router()

priceDDDRouter.get('/', PricesDDDController.all)
priceDDDRouter.post('/', authMiddleware, PricesDDDController.add)
priceDDDRouter.delete('/:id', authMiddleware, PricesDDDController.delete)
priceDDDRouter.put('/:id', authMiddleware, PricesDDDController.update)

export default priceDDDRouter
