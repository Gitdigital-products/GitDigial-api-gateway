import { build } from '../src/index'
import { describe, it, expect } from 'vitest'

describe('health', async () => {
  const app = await build()
  it('returns ok', async () => {
    const res = await app.inject({ method: 'GET', url: '/health/' })
    expect(res.statusCode).toBe(200)
    const json = res.json()
    expect(json.status).toBe('ok')
  })
})
