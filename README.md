# GitDigital API Gateway
Central API gateway routing traffic to all backend microservices.  
Handles auth verification, rate limiting, logging, and request routing.

## Stack
- FastAPI / Node (choose later)
- Redis (rate limiting)
- JWT validation (from gitdigital-auth)
# API Gateway

**Mission:** The central FastAPI-based gateway for all Gitdigital-products microservices. It handles routing, authentication, and request aggregation for internal and external APIs. It is for platform engineers and backend developers within the organization. *(Stage: Core Infrastructure)*