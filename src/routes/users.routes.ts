import { Router } from 'express'
import authMiddleware from '../middlewares/auth'

import UsersController from '../controllers/UsersController'

const userRouter = Router()

userRouter.get('/', authMiddleware, UsersController.all)
userRouter.post('/', UsersController.add)
userRouter.post('/authenticate', UsersController.authenticate)

export default userRouter
