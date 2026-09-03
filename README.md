# Rajvardhan Singh Rathore — Portfolio Website

Premium Apple-grade personal portfolio built with React, TypeScript, Tailwind CSS, and Three.js WebGL.

## 🚀 Quick Start Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to Vercel

### Method 1: Deploy via GitHub & Vercel Dashboard (Recommended)

1. Initialize Git repository and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Apple-grade portfolio for Rajvardhan Singh Rathore"
   ```

2. Create a new repository on [GitHub](https://github.com/new) and push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

3. Go to [vercel.com](https://vercel.com) and click **"Add New..." → "Project"**.
4. Import your GitHub repository.
5. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your site will be live within ~30 seconds with a free `.vercel.app` URL and custom domain support!

---

### Method 2: Deploy directly via Vercel CLI

```bash
# Run Vercel CLI directly
npx vercel

# Follow the prompts:
# ? Set up and deploy? [Y/n] y
# ? Which scope? (Select your Vercel account)
# ? Link to existing project? [y/N] n
# ? What's your project's name? rajvardhan-portfolio
# ? In which directory is your code located? ./
# ? Want to modify these settings? [y/N] n

# For production deployment:
npx vercel --prod
```
