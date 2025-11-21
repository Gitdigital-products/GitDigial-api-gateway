# Security Policy & Operational Hardening

## Supported versions
- This gateway is security-hardened for current stable Node.js LTS. Keep Node updated.

## Reporting vulnerabilities
- Send sensitive vulnerability reports to security@example.org (PGP key). Do not open issues for zero-days.

## Recommendations
- Run behind an HTTPS reverse proxy (e.g., Traefik, Nginx) with TLS 1.2+.
- Use HSM or cloud KMS for any private key storage (do not store keys in plaintext env files).
- Rotate API keys and JWT signing keys regularly.
- Enable IP allowlists for administrative endpoints.
- Use monitoring and alerting for abnormal traffic patterns and high error rates.
- Rate-limit per API key. Implement abuse detection.

## Secrets & environment
- Never commit `.env` or secrets to VCS.
- Use `ENV` / secret manager for production secrets.
