# 🚀 Single App Deployment Guide

Your app is now a **single Next.js application** with built-in API routes! No separate backend needed.

## ✅ What Changed

- ✅ Backend converted to Next.js API routes (`/app/api/`)
- ✅ All Python logic converted to TypeScript
- ✅ Single deployment - just deploy the frontend folder
- ✅ No CORS issues - everything runs on same domain
- ✅ Simpler deployment process

## 🚀 Deploy to Vercel (Recommended - 2 Minutes)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Convert to single Next.js app"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click **"Add New Project"**
4. Import your repository
5. Configure:
   - **Root Directory:** `frontend` ⚠️ Important!
   - **Framework Preset:** Next.js (auto-detected)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
6. Click **"Deploy"**
7. Wait 2-3 minutes
8. **Done!** Your app is live 🎉

### No Environment Variables Needed!

Since everything is in one app, you don't need to configure any API URLs or CORS settings.

## 🎯 Alternative Platforms

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your repository
5. Configure:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Click **"Deploy site"**

### Railway

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click **"New Project"** → **"Deploy from GitHub repo"**
4. Select your repository
5. Add service → Select `frontend` folder
6. Railway auto-detects Next.js
7. Deploy!

### Render

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click **"New +"** → **"Web Service"**
4. Connect your repository
5. Configure:
   - **Root Directory:** `frontend`
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
6. Click **"Create Web Service"**

## 📁 Project Structure

```
symtoms-checker/
├── frontend/              # Deploy this folder only!
│   ├── app/
│   │   ├── api/           # API routes (backend)
│   │   │   ├── symptoms/
│   │   │   └── predict/
│   │   ├── components/     # React components
│   │   └── page.tsx       # Main page
│   ├── lib/
│   │   └── symptomPredictor.ts  # AI logic
│   └── package.json
└── backend/              # Not needed anymore (kept for reference)
```

## 🔄 Updating Your App

Just push to GitHub:

```bash
git add .
git commit -m "Update app"
git push
```

Vercel (and most platforms) will auto-deploy!

## 🆓 Free Tier Benefits

### Vercel
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Serverless functions (API routes)
- ✅ Always active (no sleeping)

### Netlify
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Automatic HTTPS
- ✅ Custom domains

## 🆘 Troubleshooting

**Build fails?**
- Make sure root directory is set to `frontend`
- Check that `package.json` exists in frontend folder
- Verify all dependencies are in `package.json`

**API routes not working?**
- Ensure files are in `app/api/` directory
- Check route names match (`/api/symptoms`, `/api/predict`)
- Verify Next.js 13+ App Router is being used

**TypeScript errors?**
- Run `npm install` in frontend folder
- Check `tsconfig.json` paths configuration

## ✨ Benefits of Single App

1. **Simpler deployment** - One service instead of two
2. **No CORS issues** - Everything on same domain
3. **Faster** - No network calls between frontend/backend
4. **Cheaper** - Only one hosting service needed
5. **Easier maintenance** - One codebase to manage

## 🎉 You're All Set!

Your app is now ready for single-app deployment. Just deploy the `frontend` folder to Vercel and you're done!


