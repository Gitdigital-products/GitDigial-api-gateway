use axum::{
    routing::{get},
    Router, Json,
};
use serde_json::json;
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    // Define routes
    let app = Router::new()
        .route("/health", get(health_check))
        .route("/service-a", get(service_a))
        .route("/service-b", get(service_b));

    // Run server
    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));
    println!("🚪 API Gateway running at http://{}", addr);

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn health_check() -> Json<serde_json::Value> {
    Json(json!({ "status": "ok", "gateway": "alive" }))
}

async fn service_a() -> Json<serde_json::Value> {
    Json(json!({ "service": "A", "message": "Hello from Service A!" }))
}

async fn service_b() -> Json<serde_json::Value> {
    Json(json!({ "service": "B", "message": "Hello from Service B!" }))
}
