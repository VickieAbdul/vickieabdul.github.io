# Victoria Abdul - Data Analytics Portfolio

A modern, professional portfolio website showcasing data analytics projects with a clean, sophisticated design.

## 🚀 Quick Start

### 1. Create Your Portfolio Repository

1. Go to GitHub and create a new repository
2. Name it **exactly** `vickieabdul.github.io` (using your GitHub username)
3. Make it **Public**
4. Create the repository

### 2. Upload Your Portfolio Files

1. Clone the repository to your computer:
   ```bash
   git clone https://github.com/vickieabdul/vickieabdul.github.io.git
   cd vickieabdul.github.io
   ```

2. Add these three files to the repository:
   - `index.html`
   - `styles.css`
   - `script.js`

3. Commit and push:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your portfolio will be live at: `https://vickieabdul.github.io`

## 📁 File Structure

```
vickieabdul.github.io/
├── index.html       # Main portfolio page
├── styles.css       # All styling
├── script.js        # Animations and interactions
└── README.md        # This file
```

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Fade-in effects and smooth scrolling
- **Professional Aesthetic**: Clean, modern design optimized for data analytics portfolios
- **Project Showcase**: Displays your 2 current projects with placeholders for 2 more
- **Easy Navigation**: Fixed header with smooth scroll to sections
- **GitHub Integration**: Direct links to live demos and repositories

## 🎨 Customization Guide

### Adding Your Future Projects

When you're ready to add projects 3 and 4, locate these sections in `index.html`:

```html
<!-- Project 3 Placeholder -->
<article class="project-card project-placeholder">
    <div class="project-number">03</div>
    <div class="project-content">
        <h3 class="project-title">Coming Soon</h3>
        ...
    </div>
</article>
```

Replace with your actual project information:

```html
<article class="project-card">
    <div class="project-number">03</div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">
            Your project description here...
        </p>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="https://vickieabdul.github.io/your-repo-name/" target="_blank" class="project-link">
                View Live Demo
                <svg>...</svg>
            </a>
            <a href="https://github.com/vickieabdul/your-repo-name" target="_blank" class="project-link">
                GitHub Repo
                <svg>...</svg>
            </a>
        </div>
    </div>
</article>
```

**Important**: Remove the `project-placeholder` class when adding real projects!

### Updating Your LinkedIn

Find this section in `index.html`:

```html
<a href="https://www.linkedin.com/in/victoria-abdul" target="_blank" class="contact-link">
```

Replace with your actual LinkedIn URL.

### Changing Colors

All colors are defined in `styles.css` at the top:

```css
:root {
    --primary: #0066FF;        /* Main blue color */
    --accent: #00D9FF;         /* Accent cyan */
    --text-primary: #1A1A1A;   /* Main text color */
    /* ... more colors ... */
}
```

Simply change these hex values to customize the color scheme.

### Adding More Skills

In the "About" section of `index.html`, add more items to the skill categories:

```html
<div class="skill-category">
    <h3>Technical Skills</h3>
    <ul>
        <li>Python, SQL, Power BI</li>
        <li>Predictive Analytics</li>
        <li>Data Warehousing</li>
        <li>Your New Skill Here</li>  <!-- Add here -->
    </ul>
</div>
```

## 🔗 Setting Up Project Links

For each of your GitHub projects to work as live demos:

1. Go to the project repository (e.g., `Hotel-Portfolio-Performance-Analysis-`)
2. Click **Settings** → **Pages**
3. Select **main** branch as source
4. Click **Save**
5. Your project will be live at: `https://vickieabdul.github.io/repo-name/`

## 📱 Mobile Responsive

The portfolio automatically adjusts for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🐛 Troubleshooting

**Portfolio not showing up?**
- Wait 2-5 minutes after pushing to GitHub
- Check that repository is named exactly `vickieabdul.github.io`
- Verify GitHub Pages is enabled in Settings → Pages

**Projects not loading?**
- Make sure each project repository has GitHub Pages enabled
- Check that URLs in your portfolio match the actual repository names
- URLs are case-sensitive!

## 📝 License

This portfolio is free to use and modify for your personal projects.

## 🤝 Support

If you need help:
1. Check GitHub Pages documentation: https://pages.github.com
2. Review HTML/CSS for any typos in your customizations
3. Verify all file names are correct (case-sensitive)

---

Built with ❤️ for showcasing data analytics work
