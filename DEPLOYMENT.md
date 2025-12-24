# Free Deployment Guide

This guide covers free deployment options for both the frontend (Next.js) and backend (FastAPI).

## 🚀 Quick Deploy Options

### Option 1: Vercel (Frontend) + Render (Backend) - Recommended ⭐

**Best for:** Easiest setup, great free tiers

#### Frontend on Vercel (Free)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/symptoms-checker.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Set root directory to `frontend`
   - Add environment variable:
     ```
     NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
     ```
   - Click "Deploy"

#### Backend on Render (Free)

1. **Create `render.yaml` in backend folder:**
   ```yaml
   services:
     - type: web
       name: symptoms-checker-api
       env: python
       buildCommand: pip install -r requirements.txt
       startCommand: uvicorn main:app --host 0.0.0.0 --port $PORT
       envVars:
         - key: PYTHON_VERSION
           value: 3.9.6
   ```

2. **Deploy to Render**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub
   - Click "New +" → "Web Service"
   - Connect your repository
   - Set:
     - **Root Directory:** `backend`
     - **Environment:** Python 3
     - **Build Command:** `pip install -r requirements.txt`
     - **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - Click "Create Web Service"

3. **Update CORS in backend**
   - In `backend/main.py`, update allowed origins:
   ```python
   allow_origins=["https://your-frontend.vercel.app", "http://localhost:3000"]
   ```

---

### Option 2: Vercel (Frontend) + Railway (Backend)

**Best for:** Modern platforms, easy setup

#### Backend on Railway (Free)

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add service → Select `backend` folder
6. Railway auto-detects Python
7. Add environment variable:
   ```
   PORT=8000
   ```
8. Railway provides a URL automatically

---

### Option 3: Netlify (Frontend) + Fly.io (Backend)

**Best for:** Alternative to Vercel, good free tier

#### Frontend on Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Set:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Add environment variable:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.fly.dev
   ```

#### Backend on Fly.io

1. Install Fly CLI:
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. Create `fly.toml` in backend folder:
   ```toml
   app = "your-app-name"
   primary_region = "iad"

   [build]

   [env]
     PORT = "8000"

   [[services]]
     internal_port = 8000
     protocol = "tcp"

     [[services.ports]]
       handlers = ["http"]
       port = 80

     [[services.ports]]
       handlers = ["tls", "http"]
       port = 443
   ```

3. Deploy:
   ```bash
   cd backend
   fly launch
   fly deploy
   ```

---

## 📝 Step-by-Step: Vercel + Render (Recommended)

### Step 1: Prepare Backend for Render

Update `backend/main.py` to handle Render's PORT:

```python
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from symptom_predictor import SymptomPredictor

app = FastAPI(title="Symptoms Checker API", version="1.0.0")

# Get port from environment or default to 8000
PORT = int(os.environ.get("PORT", 8000))

# Configure CORS - Update with your frontend URL
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://your-frontend.vercel.app",  # Update after deployment
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

predictor = SymptomPredictor()

class SymptomRequest(BaseModel):
    symptoms: List[str]

@app.get("/")
async def root():
    return {"message": "Symptoms Checker API is running"}

@app.get("/api/symptoms")
async def get_symptoms():
    return {"symptoms": predictor.get_available_symptoms()}

@app.post("/api/predict")
async def predict_condition(request: SymptomRequest):
    try:
        if not request.symptoms:
            raise HTTPException(status_code=400, detail="No symptoms provided")
        result = predictor.predict(request.symptoms)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=PORT)
```

### Step 2: Create `runtime.txt` for Render

Create `backend/runtime.txt`:
```
python-3.9.6
```

### Step 3: Deploy Backend to Render

1. Go to [render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** `symptoms-checker-api`
   - **Root Directory:** `backend`
   - **Environment:** `Python 3`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Click "Create Web Service"
6. Wait for deployment (5-10 minutes)
7. Copy your backend URL (e.g., `https://symptoms-checker-api.onrender.com`)

### Step 4: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Root Directory:** `frontend`
   - **Framework Preset:** Next.js (auto-detected)
5. Add Environment Variable:
   - **Key:** `NEXT_PUBLIC_API_URL`
   - **Value:** Your Render backend URL (e.g., `https://symptoms-checker-api.onrender.com`)
6. Click "Deploy"
7. Wait for deployment (2-3 minutes)

### Step 5: Update CORS

1. Go back to Render dashboard
2. Update your backend's CORS settings in `backend/main.py`:
   ```python
   allow_origins=[
       "http://localhost:3000",
       "https://your-frontend.vercel.app",  # Your actual Vercel URL
   ]
   ```
3. Redeploy backend

---

## 🆓 Free Tier Limits

### Vercel (Frontend)
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domains
- ⚠️ Serverless functions: 100GB-hours/month

### Render (Backend)
- ✅ 750 hours/month (enough for 24/7)
- ✅ Automatic HTTPS
- ⚠️ Spins down after 15 min inactivity (first request takes ~30s)
- ⚠️ Can upgrade to always-on ($7/month)

### Railway (Backend)
- ✅ $5 free credit/month
- ✅ ~500 hours free
- ⚠️ Requires credit card (not charged if under limit)

### Fly.io (Backend)
- ✅ 3 shared VMs free
- ✅ 160GB outbound data/month
- ✅ Always-on

---

## 🔧 Troubleshooting

### Backend not responding
- Check Render logs for errors
- Verify PORT environment variable
- Ensure `uvicorn` is in requirements.txt

### CORS errors
- Update `allow_origins` in backend with your frontend URL
- Include both `http://` and `https://` if needed

### Frontend can't connect to backend
- Verify `NEXT_PUBLIC_API_URL` environment variable
- Check backend URL is accessible
- Ensure backend is running (Render may be sleeping)

---

## 📦 Alternative: Single Platform (Railway)

You can deploy both on Railway:

1. Create two services in one Railway project
2. Frontend service: Point to `frontend` folder
3. Backend service: Point to `backend` folder
4. Set environment variables accordingly

---

## 🎯 Recommended Setup

**For beginners:** Vercel (Frontend) + Render (Backend)
- Easiest to set up
- Great documentation
- Reliable free tiers

**For always-on backend:** Vercel (Frontend) + Fly.io (Backend)
- Backend never sleeps
- Better for production
- Slightly more complex setup

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Fly.io Documentation](https://fly.io/docs)

