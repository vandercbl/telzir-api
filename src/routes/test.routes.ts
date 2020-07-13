import { Router } from 'express'
import authMiddleware from '../middlewares/auth'

const testRouter = Router()

testRouter.use(authMiddleware)

testRouter.get('/', async (req, res) => {
  return res.json({ message: 'Rout of test ok' })
})

export default testRouter
