export function validateRpcPayload(body: any): boolean {
  if (!body || typeof body !== 'object') return false
  if (!('method' in body)) return false
  // JSON-RPC 2.0 basic check
  if (body.jsonrpc && body.jsonrpc !== '2.0') return false
  return true
}
