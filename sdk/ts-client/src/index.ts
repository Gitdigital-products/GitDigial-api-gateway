import fetch from "cross-fetch";

export type RpcResponse = { jsonrpc?: string; result?: any; error?: any; id?: string | number };

export class GatewayClient {
  private base: string;
  private apiKey?: string;
  constructor(baseUrl: string, apiKey?: string) {
    this.base = baseUrl.replace(/\/+$/, "");
    this.apiKey = apiKey;
  }

  private headers(extra?: Record<string,string>) {
    const h: Record<string,string> = { "Content-Type": "application/json" };
    if (this.apiKey) h["x-api-key"] = this.apiKey;
    if (extra) Object.assign(h, extra);
    return h;
  }

  async health(): Promise<{ status: string; timestamp: number }> {
    const res = await fetch(`${this.base}/health/`, { headers: this.headers() });
    if (!res.ok) throw new Error(`Health check failed: ${res.status}`);
    return res.json();
  }

  async rpcProxy(method: string, params: any[] = [], id: string | number = 1): Promise<RpcResponse> {
    const body = { jsonrpc: "2.0", method, params, id };
    const res = await fetch(`${this.base}/rpc/proxy`, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`RPC proxy failed: ${res.status}`);
    return res.json();
  }

  async submitTx(chain: string, rawTx: string, signature?: string): Promise<{ jobId: string }> {
    const body = { chain, raw_tx: rawTx, signature };
    const res = await fetch(`${this.base}/tx/submit`, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`tx submit failed: ${res.status} ${text}`);
    }
    return res.json();
  }

  async registerWebhook(url: string, events: string[], secret?: string): Promise<{ webhook_id: string }> {
    const res = await fetch(`${this.base}/webhooks/register`, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({ url, events, secret }),
    });
    if (!res.ok) throw new Error(`register webhook failed: ${res.status}`);
    return res.json();
  }
}
