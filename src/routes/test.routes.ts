import { Router } from 'express'
const testRouter = Router()

testRouter.get('/', async (req, res) => {
  return res.json({ message: 'Rout of test ok' })
})

export default testRouter
