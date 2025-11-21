import { FastifyPluginAsync } from 'fastify'
import jwt from 'jsonwebtoken'

export const authPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.decorateRequest('apiKey', null)

  fastify.addHook('preHandler', async (request, reply) => {
    const key = request.headers['x-api-key'] as string | undefined
    const auth = request.headers.authorization as string | undefined

    if (key) {
      // TODO: lookup key in DB/cache
      // For scaffold, accept a single key from env
      const valid = key === process.env.API_KEY
      if (!valid) return reply.status(401).send({ error: 'Invalid API key' })
      request.apiKey = key
      return
    }

    if (auth && auth.startsWith('Bearer ')) {
      const token = auth.slice(7)
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'replace')
        request.apiKey = (decoded as any).sub
        return
      } catch (e) {
        return reply.status(401).send({ error: 'Invalid token' })
      }
    }

    // If neither provided, reject
    return reply.status(401).send({ error: 'Authentication required' })
  })
}
