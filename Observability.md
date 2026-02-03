# 🌐 1. What the Observability Suite Includes

The GitDigital Observability Suite provides:

A. Metrics
- Request throughput  
- Latency (p50, p90, p99)  
- Error rates  
- Rate limit events  
- Upstream service failures  
- Circuit breaker state  
- Queue depth (governance, disbursements)  
- KYC verification times  
- Milestone submission volume  

B. Logs
- Structured request logs  
- Structured response logs  
- Upstream logs  
- Audit logs  
- Governance logs  
- CLI logs  
- SDK logs  

C. Health Checks
- API Gateway health  
- Automation Engine health  
- Governance Service health  
- Ledger Service health  
- KYC Service health  
- Database health  
- Redis health (if used)  

D. Dashboards
- Real‑time metrics  
- Error dashboards  
- Governance dashboards  
- Disbursement dashboards  
- KYC dashboards  
- Workflow engine dashboards  

E. Alerts
- High error rate  
- High latency  
- Upstream service down  
- Circuit breaker open  
- Governance queue backlog  
- Disbursement delays  
- KYC verification failures  

This is the operational nervous system of GitDigital.

---

# 🧱 2. Tech Stack for Observability

`
Prometheus (metrics)
Grafana (dashboards)
Loki (logs)
Tempo (traces, optional)
FastAPI instrumentation
Node.js instrumentation (dashboard + portal)
SDK instrumentation
CLI instrumentation
`

This gives you:

- unified metrics  
- unified logs  
- unified dashboards  
- unified alerts  

---

# 📁 3. Folder Structure

`
observability/
  prometheus/
    prometheus.yml
  grafana/
    dashboards/
      api-gateway.json
      governance.json
      disbursements.json
      kyc.json
      workflow-engine.json
  loki/
    config.yml
  exporters/
    api-gateway-exporter.py
    automation-engine-exporter.py
    governance-exporter.py
`

---

# 📊 4. Metrics Exporter for API Gateway

The API Gateway exposes Prometheus metrics:

/metrics

Metrics include:

- gatewayrequeststotal  
- gatewayrequestlatency_seconds  
- gatewayerrorstotal  
- gatewayratelimitexceededtotal  
- gatewayupstreamfailures_total  
- gatewaycircuitbreakeropentotal  

Example:

`
gatewayrequeststotal{method="GET",route="/founders"} 1234
gatewayrequestlatencysecondsbucket{le="0.1"} 456
gatewayerrorstotal{code="UPSTREAM_ERROR"} 12
`

---

# 🧠 5. Governance Metrics Exporter

Governance-specific metrics:

- governancependingitems  
- governanceinterestreviews_pending  
- governancesignaturespending  
- governancedisbursementspending  
- governancedecisionstotal  
- governanceapprovalstotal  
- governancerejectionstotal  

These power your Governance Console dashboards.

---

# 💸 6. Disbursement Metrics

- disbursementpendingtotal  
- disbursementapprovedtotal  
- disbursementrejectedtotal  
- disbursementprocessingtime_seconds  

This helps you detect:

- bottlenecks  
- delays  
- governance issues  

---

# 🧾 7. Audit Log Metrics

Audit logs feed into:

- auditeventstotal  
- auditeventsby_type  
- auditeventsby_user  

This gives you governance transparency at scale.

---

# 🩺 8. Health Checks

Each service exposes:

/health

Returns:

`
{
  "status": "ok",
  "uptime": "12345s",
  "dependencies": {
    "automation_engine": "ok",
    "governance_service": "ok",
    "ledger_service": "ok",
    "kyc_service": "ok"
  }
}
`

Grafana monitors:

- uptime  
- dependency health  
- error spikes  

---

# 📈 9. Grafana Dashboards

You get dashboards for:

A. API Gateway
- Requests per second  
- Latency  
- Error rate  
- Rate limit events  
- Upstream failures  
- Circuit breaker state  

B. Governance
- Pending items  
- Signature status  
- Interest review queue  
- Disbursement approvals  
- Decision breakdown  

C. Disbursements
- Pending  
- Approved  
- Rejected  
- Processing time  

D. KYC
- Verification times  
- Failure rate  
- Pending verifications  

E. Workflow Engine
- State transitions  
- Blocked transitions  
- Simulation failures  

These dashboards become your operational cockpit.

---

# 🚨 10. Alerts

Alerts fire when:

- error rate > 5%  
- p99 latency > 1s  
- upstream service down  
- governance queue > threshold  
- disbursement backlog > threshold  
- KYC failures spike  
- circuit breaker open > 30s  

Alerts go to:

- Slack  
- Email  
- PagerDuty (optional)  
