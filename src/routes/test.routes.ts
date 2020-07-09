import { Router } from 'express'

const testRouter = Router()

testRouter.get('/', async (request, response) => {
  return response.json({ message: 'Rout of test ok' })
})

export default testRouter
