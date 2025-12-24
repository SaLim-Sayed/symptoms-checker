from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import os
import numpy as np
from symptom_predictor import SymptomPredictor

app = FastAPI(title="Symptoms Checker API", version="1.0.0")

# Get allowed origins from environment or use defaults
ALLOWED_ORIGINS = os.environ.get(
    "ALLOWED_ORIGINS",
    "http://localhost:3000,http://127.0.0.1:3000"
).split(",")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize predictor
predictor = SymptomPredictor()

class SymptomRequest(BaseModel):
    symptoms: List[str]

@app.get("/")
async def root():
    return {"message": "Symptoms Checker API is running"}

@app.get("/api/symptoms")
async def get_symptoms():
    """Get list of available symptoms"""
    return {"symptoms": predictor.get_available_symptoms()}

@app.post("/api/predict")
async def predict_condition(request: SymptomRequest):
    """Predict possible conditions based on symptoms"""
    try:
        if not request.symptoms:
            raise HTTPException(status_code=400, detail="No symptoms provided")
        
        result = predictor.predict(request.symptoms)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    # Get port from environment variable (for Render, Railway, etc.) or default to 8000
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)

