from fastapi import FastAPI
from routes import auth, users, models

app = FastAPI(title="GitDigital API Gateway")

app.include_router(auth.router, prefix="/auth")
app.include_router(users.router, prefix="/users")
app.include_router(models.router, prefix="/models")

@app.get("/")
def root():
    return {"status": "gateway online"}
