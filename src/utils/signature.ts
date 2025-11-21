import { createHmac } from 'crypto'

export function verifySignature(payload: string, signature: string, secret: string) {
  const h = createHmac('sha256', secret)
  h.update(payload)
  const expected = h.digest('hex')
  return expected === signature
}
