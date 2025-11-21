import os, requests, json
BASE = os.getenv("GATEWAY_URL", "https://api.example.com")
KEY = os.getenv("GW_API_KEY", "devkey")
headers = {"x-api-key": KEY, "Content-Type": "application/json"}

print(requests.get(f"{BASE}/health/", headers=headers).json())

r = requests.post(f"{BASE}/rpc/proxy", headers=headers, json={"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1})
print(r.status_code, r.json())
