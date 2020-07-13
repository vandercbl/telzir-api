import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader) return res.status(401).send({ error: 'Token não informado' })

  const parts = authHeader.split(' ')
  if (!parts.lenght === 2) return res.status(401).send({ error: 'Token erro' })

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: 'Token fora do formato' })

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Token inválido' })

    req.userId = decoded._id
    return next()
  })
}

export default authMiddleware
