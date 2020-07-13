import { Router } from 'express'
import authMiddleware from '../middlewares/auth'

import PlansController from '../controllers/PlansController'

const planRouter = Router()

planRouter.use(authMiddleware)

planRouter.get('/', PlansController.all)
planRouter.post('/', PlansController.add)
planRouter.delete('/:id', PlansController.delete)
planRouter.put('/:id', PlansController.update)

export default planRouter
