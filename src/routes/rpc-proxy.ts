import { FastifyInstance } from 'fastify'
import fetch from 'node-fetch'
import { validateRpcPayload } from '../utils/validate'

const UPSTREAM = process.env.UPSTREAM_RPC_URL || 'https://rpc.example.chain'

export async function rpcProxyRoutes(fastify: FastifyInstance) {
  fastify.post('/proxy', async (request, reply) => {
    const body = request.body as any
    // Basic validation
    const valid = validateRpcPayload(body)
    if (!valid) return reply.status(400).send({ error: 'Invalid JSON-RPC payload' })

    // Prevent dangerous methods (example):
    const forbidden = ['admin_*', 'debug_*']
    if (typeof body.method === 'string' && forbidden.some(f => body.method.startsWith(f))) {
      return reply.status(403).send({ error: 'Method forbidden' })
    }

    // Forward to upstream
    const res = await fetch(UPSTREAM, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })

    const json = await res.json()
    return json
  })
}
