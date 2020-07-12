import { Router } from 'express'

import UsersController from '../controllers/UsersController'

const userRouter = Router()

userRouter.get('/', UsersController.all)
userRouter.post('/', UsersController.add)

export default userRouter
