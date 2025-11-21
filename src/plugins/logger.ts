import { FastifyPluginAsync } from 'fastify'

export const loggerPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('onResponse', async (request, reply) => {
    // Minimal structured audit log example
    fastify.log.info({
      method: request.method,
      url: request.url,
      status: reply.statusCode,
      apiKey: request.apiKey || null,
      time: Date.now()
    }, 'request-complete')
  })
}
