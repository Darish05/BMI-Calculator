# 🚀 Deploy BMI Calculator to Render.com

## Step-by-Step Guide to Render Your React App

### ✅ Prerequisites
- GitHub repository is ready: `https://github.com/Darish05/BMI-Calculator.git`
- All files are pushed ✓

---

## 📝 STEP 1: Create Render Account

1. Go to: **https://render.com**
2. Click **"Get Started"** or **"Sign Up"**
3. **Sign up with GitHub** (recommended - easiest integration)
4. Authorize Render to access your GitHub repositories

---

## 📝 STEP 2: Create New Static Site

1. After logging in, click the **"New +"** button (top right)
2. Select **"Static Site"** from the dropdown menu

---

## 📝 STEP 3: Connect Your GitHub Repository

1. You'll see a list of your GitHub repositories
2. Find **"BMI-Calculator"** repository
3. Click **"Connect"** button next to it

   **Note:** If you don't see your repository:
   - Click "Configure account" link
   - Give Render access to the repository
   - Come back and refresh

---

## 📝 STEP 4: Configure Build Settings

Fill in these EXACT values:

| Field | Value |
|-------|-------|
| **Name** | `bmi-calculator` (or any name you prefer) |
| **Branch** | `main` |
| **Root Directory** | (leave empty) |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `build` |

### Screenshot Reference:
```
┌─────────────────────────────────────────┐
│ Name: bmi-calculator                    │
│ Branch: main                            │
│ Root Directory:                         │
│ Build Command: npm install && npm run   │
│               build                     │
│ Publish Directory: build                │
└─────────────────────────────────────────┘
```

---

## 📝 STEP 5: Deploy!

1. Scroll down and click **"Create Static Site"** button
2. Render will start building your app
3. You'll see the build logs in real-time

**Build Process:**
- ⏳ Installing dependencies... (~1-2 min)
- ⏳ Building React app... (~1-2 min)
- ⏳ Deploying... (~30 sec)
- ✅ **Live!** (Total: 2-5 minutes)

---

## 📝 STEP 6: Access Your Live App

Once deployment is complete:

1. You'll see a **green "Live"** badge
2. Your app URL will be displayed at the top:
   ```
   https://bmi-calculator-xxxx.onrender.com
   ```
3. Click the URL to open your BMI Calculator!

---

## 🎉 Your App is Now Live!

**Share your app:** Copy the URL and share it with anyone!

**Features you can now enjoy:**
- ✅ Live on the internet (accessible from anywhere)
- ✅ Free SSL certificate (HTTPS)
- ✅ Auto-deploys when you push to GitHub
- ✅ 100 GB bandwidth/month (free tier)

---

## 🔄 Future Updates

Whenever you make changes to your code:

1. **Commit changes:**
   ```powershell
   git add .
   git commit -m "Your update message"
   git push
   ```

2. **Render will automatically:**
   - Detect the changes
   - Rebuild your app
   - Deploy the new version
   - Takes ~2-5 minutes

---

## 💡 Render Dashboard Features

In your Render dashboard, you can:
- 📊 View build logs
- 🔄 Manual redeploy (if needed)
- ⚙️ Environment variables (if needed later)
- 📈 Usage statistics
- 🌐 Custom domain (upgrade to paid plan)

---

## ❓ Troubleshooting

### Build Failed?
1. Check build logs for errors
2. Make sure `package.json` is correct
3. Try manual redeploy from dashboard

### App not loading?
1. Check that build command is: `npm install && npm run build`
2. Check that publish directory is: `build`
3. Wait 2-3 minutes after deployment

---

## 🎯 Quick Summary

1. Go to **render.com** → Sign up with GitHub
2. Click **"New +" → "Static Site"**
3. Connect **BMI-Calculator** repository
4. Set:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `build`
5. Click **"Create Static Site"**
6. Wait 2-5 minutes
7. **Done! Your app is live! 🚀**

---

**Your Repository:** https://github.com/Darish05/BMI-Calculator.git
**Render Dashboard:** https://dashboard.render.com

**Good luck! 🎉**
