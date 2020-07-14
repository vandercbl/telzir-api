import { Router } from 'express'
import authMiddleware from '../middlewares/auth'

import PlansController from '../controllers/PlansController'

const planRouter = Router()

planRouter.get('/', PlansController.all)
planRouter.post('/', authMiddleware, PlansController.add)
planRouter.delete('/:id', authMiddleware, PlansController.delete)
planRouter.put('/:id', authMiddleware, PlansController.update)

export default planRouter
