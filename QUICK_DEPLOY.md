# 🚀 Quick Deploy Guide (5 Minutes)

## Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Ready for deployment"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/symptoms-checker.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy Backend (Render) - 3 minutes

1. Go to [render.com](https://render.com) → Sign up with GitHub
2. Click **"New +"** → **"Web Service"**
3. Connect your repository
4. Configure:
   - **Name:** `symptoms-checker-api`
   - **Root Directory:** `backend`
   - **Environment:** `Python 3`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Click **"Create Web Service"**
6. Wait 5-10 minutes for deployment
7. **Copy your backend URL** (e.g., `https://symptoms-checker-api.onrender.com`)

## Step 3: Deploy Frontend (Vercel) - 2 minutes

1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **"Add New Project"**
3. Import your repository
4. Configure:
   - **Root Directory:** `frontend`
   - **Framework Preset:** Next.js (auto-detected)
5. Add Environment Variable:
   - **Key:** `NEXT_PUBLIC_API_URL`
   - **Value:** Your Render backend URL from Step 2
6. Click **"Deploy"**
7. Wait 2-3 minutes
8. **Copy your frontend URL** (e.g., `https://symptoms-checker.vercel.app`)

## Step 4: Update CORS

1. Go back to Render dashboard
2. Click on your service → **"Environment"** tab
3. Add new environment variable:
   - **Key:** `ALLOWED_ORIGINS`
   - **Value:** `http://localhost:3000,https://YOUR_FRONTEND_URL.vercel.app`
4. Click **"Save Changes"** (auto-redeploys)

## ✅ Done!

Your app is now live:
- **Frontend:** https://your-app.vercel.app
- **Backend:** https://your-api.onrender.com

## 🔄 Updating Your App

Just push to GitHub:
```bash
git add .
git commit -m "Update app"
git push
```

Both Vercel and Render will auto-deploy!

## ⚠️ Important Notes

- **Render free tier:** Backend sleeps after 15 min inactivity (first request takes ~30s)
- **Vercel:** Always active, unlimited deployments
- Both platforms provide HTTPS automatically

## 🆘 Troubleshooting

**Backend not responding?**
- Check Render logs
- Verify PORT is set correctly
- Wait 30s for first request (if sleeping)

**CORS errors?**
- Update `ALLOWED_ORIGINS` in Render
- Include your Vercel frontend URL

**Frontend can't connect?**
- Verify `NEXT_PUBLIC_API_URL` environment variable
- Check backend URL is correct

