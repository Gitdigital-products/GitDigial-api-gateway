import Fastify from 'fastify'
import swagger from 'fastify-swagger'
import rateLimit from 'fastify-rate-limit'
import helmet from 'fastify-helmet'
import cors from 'fastify-cors'
import { healthRoutes } from './routes/health'
import { rpcProxyRoutes } from './routes/rpc-proxy'
import { authPlugin } from './plugins/auth'
import { rateLimiter } from './plugins/rateLimiter'
import { loggerPlugin } from './plugins/logger'

const PORT = Number(process.env.PORT || 3000)

async function build() {
  const app = Fastify({ logger: true })

  await app.register(helmet)
  await app.register(cors, { origin: true })

  // Swagger
  await app.register(swagger, {
    routePrefix: '/docs',
    openapi: {
      info: { title: 'Blockchain API Gateway', version: '1.0.0' }
    },
    exposeRoute: true
  })

  // Plugins
  await app.register(loggerPlugin)
  await app.register(authPlugin)
  await app.register(rateLimiter)

  // Routes
  app.register(healthRoutes, { prefix: '/health' })
  app.register(rpcProxyRoutes, { prefix: '/rpc' })

  return app
}

if (require.main === module) {
  build().then(app => app.listen({ port: PORT, host: '0.0.0.0' }))
}

export default build
