import { FastifyPluginAsync } from 'fastify'
import rateLimit from 'fastify-rate-limit'

export const rateLimiter: FastifyPluginAsync = async (fastify) => {
  await fastify.register(rateLimit, {
    max: Number(process.env.RATE_LIMIT_POINTS || 100),
    timeWindow: '1 minute'
  })
}
