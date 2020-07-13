import { Router } from 'express'

import PlansController from '../controllers/PlansController'

const planRouter = Router()

planRouter.get('/', PlansController.all)
planRouter.post('/', PlansController.add)

export default planRouter
