#!/usr/bin/env node
import { GatewayClient } from "../sdk/ts-client/dist/index.js";

const BASE = process.env.GATEWAY_URL || "https://api.example.com";
const KEY = process.env.GW_API_KEY || "devkey";

async function run() {
  const c = new GatewayClient(BASE, KEY);
  console.log("Health:", await c.health());
  console.log("Block number:", await c.rpcProxy("eth_blockNumber"));
  // Submit dummy tx (non-signed); expect error or job id depending on server
  try {
    const res = await c.submitTx("evm:goerli", "0xDEADBEEF");
    console.log("Submit job:", res);
  } catch (e) {
    console.error("Submit failed:", e.message);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
