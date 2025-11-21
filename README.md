# Blockchain API Gateway

A secure, documented API gateway that exposes a developer-friendly HTTP API for interacting with blockchain networks (RPC proxying, read-only endpoints, transaction submission helpers, analytics hooks, and webhook forwarding). Built with Fastify + TypeScript and designed for production use.

## Features

- JWT & API key authentication
- Rate limiting & per-key quotas
- Input validation & JSON Schema-based request validation
- Signature verification for sensitive operations
- OpenAPI (Swagger) spec included
- Logging & structured audit trails
- Docker + docker-compose for local dev
- Example client & tests

## Quickstart (development)

1. Copy `.env.example` to `.env` and set values.
2. Install dependencies:

```bash
npm install
