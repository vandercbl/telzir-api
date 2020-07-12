import { Router } from 'express'
import testRouter from './test.routes'
import userRouter from './users.routes'

const routes = Router()

routes.use('/test', testRouter)
routes.use('/users', userRouter)

export default routes
