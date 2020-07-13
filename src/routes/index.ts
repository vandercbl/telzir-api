import { Router } from 'express'
import testRouter from './test.routes'
import userRouter from './users.routes'
import planRouter from './plans.routes'
import priceDDDRouter from './pricesDDD.routes'

const routes = Router()

routes.use('/test', testRouter)
routes.use('/users', userRouter)
routes.use('/plans', planRouter)
routes.use('/prices-ddd', priceDDDRouter)

export default routes
