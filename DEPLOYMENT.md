# OneScript Healthcare UI - Deployment Guide

This guide will help you deploy the OneScript Healthcare UI to various free hosting platforms.

## Quick Start

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: OneScript Healthcare UI"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/onescript-ui.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://YOUR_USERNAME.github.io/onescript-ui/`

### Option 2: Netlify (Easiest)

1. **Drag and Drop**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up/login
   - Drag and drop the entire project folder
   - Your site is live instantly!

2. **Git Integration**
   - Connect your GitHub repository
   - Netlify will auto-deploy on every push

### Option 3: Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Your site will be live instantly!

### Option 4: Surge.sh

1. **Install Surge**
   ```bash
   npm install -g surge
   ```

2. **Deploy**
   ```bash
   surge
   ```
   - Follow the prompts
   - Your site will be live at: `your-project-name.surge.sh`

## Local Development

### Using npm/http-server

```bash
npm install
npm start
```

Then open: `http://localhost:8080`

### Using Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Using PHP

```bash
php -S localhost:8000
```

## Project Structure

```
onescript-ui/
├── index.html              # Landing page
├── styles.css              # Main stylesheet
├── js/
│   └── app.js              # Shared JavaScript
├── components/
│   ├── header.html        # Header component
│   ├── header-root.html   # Header for root page
│   └── footer.html        # Footer component
├── auth/                   # Authentication pages
├── patient/                # Patient pages
├── doctor/                 # Doctor pages
├── pharmacist/             # Pharmacist pages
└── admin/                  # Admin pages
```

## Features

- ✅ Fully functional navigation
- ✅ Form handling and validation
- ✅ Modal popups
- ✅ Responsive design
- ✅ Clean, healthcare-appropriate UI
- ✅ Complete user flow implementation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All pages use relative paths for easy deployment
- No backend required - pure static HTML/CSS/JS
- Works with any static hosting service
- Can be easily integrated into any framework

## Support

For issues or questions, please open an issue on GitHub.

