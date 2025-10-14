from fastapi import FastAPI

app = FastAPI(title="Exam Platform API")

@app.get("/api/health")
def health():
    return {"status": "ok"}
