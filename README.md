# Victoria Abdul - Data Analytics Portfolio

A professional corporate portfolio with navy blue & teal color scheme, designed for data analytics professionals.

## 🚀 Your Portfolio is Already Live!

Your portfolio is at: **https://vickieabdul.github.io**

## 📝 How To Edit Your Website

### Option 1: Edit Directly on GitHub (Easiest!)

1. Go to: https://github.com/vickieabdul/vickieabdul.github.io
2. Click on the file you want to edit (like `index.html`)
3. Click the ✏️ pencil icon that says "Edit this file"
4. Make your changes
5. Scroll down, click "Commit changes"
6. Wait 2-3 minutes, refresh your website to see changes

### Option 2: Download and Edit

1. Download files from GitHub
2. Edit with any text editor (Notepad, VS Code, etc.)
3. Upload back to GitHub

## 📁 File Structure

```
vickieabdul.github.io/
├── index.html       # Main portfolio page
├── styles.css       # All styling
├── script.js        # Animations and interactions
└── README.md        # This file
```

## 📸 How To Add Your Photos

### Adding Your Headshot Photo:

1. **Upload your photo to GitHub:**
   - Go to your repository
   - Click "Add file" → "Upload files"
   - Upload your professional photo (name it something like `profile.jpg`)

2. **Edit index.html:**
   - Open `index.html` on GitHub
   - Click the pencil icon to edit
   - Find line 45 (search for "REPLACE THIS: Add your professional headshot")
   - Replace this entire section:
   ```html
   <div class="profile-placeholder">
       <!-- all the placeholder code -->
   </div>
   ```
   With:
   ```html
   <img src="profile.jpg" alt="Victoria Abdul" class="profile-image">
   ```

3. **Commit changes** and wait 2 minutes

### Adding Project Screenshots:

Same process! For each project:

1. Upload screenshot to GitHub (name it like `milton-hotels-screenshot.jpg`)
2. Find the project section in `index.html`
3. Replace the `<div class="image-placeholder">` with:
   ```html
   <img src="milton-hotels-screenshot.jpg" alt="Project Name">
   ```

## ➕ How To Add New Projects (Projects 3 & 4)

When you're ready to add your new projects:

1. **Edit index.html** on GitHub
2. **Find Project 3** (search for "Project 3 Placeholder")
3. **Replace this:**
   ```html
   <article class="project project-upcoming">
       <div class="project-content-centered">
           <span class="project-number">03</span>
           <h3 class="project-title">Coming Soon</h3>
           <p class="project-description">Additional analytics project in development...</p>
       </div>
   </article>
   ```

4. **With this format** (copy from Project 1 or 2 and edit):
   ```html
   <article class="project">
       <div class="project-image">
           <img src="your-project-screenshot.jpg" alt="Your Project">
       </div>
       <div class="project-content">
           <div class="project-header">
               <span class="project-number">03</span>
               <h3 class="project-title">Your Project Name</h3>
           </div>
           <p class="project-description">
               Your project description here...
           </p>
           <div class="project-highlights">
               <h4>Key Achievements:</h4>
               <ul>
                   <li>Achievement 1</li>
                   <li>Achievement 2</li>
               </ul>
           </div>
           <div class="project-tech">
               <span class="tech-badge">Python</span>
               <span class="tech-badge">SQL</span>
           </div>
           <div class="project-links">
               <a href="https://vickieabdul.github.io/your-repo-name/" target="_blank" class="project-link primary">
                   View Live Project →
               </a>
               <a href="https://github.com/vickieabdul/your-repo-name" target="_blank" class="project-link secondary">
                   <svg>...</svg>
                   GitHub Repository
               </a>
           </div>
       </div>
   </article>
   ```

5. **Important:** Make sure to enable GitHub Pages for your new project repositories!

## 🎨 Customization

### Change Colors:
Edit `styles.css` at the top where it says `:root {`
- `--navy-dark: #0A2463;` ← Main navy color
- `--teal-primary: #14B8A6;` ← Main teal color

### Update Your Information:
- LinkedIn: Search for "linkedin.com/in/victoria-abdul" and replace with your URL
- Email: Search for "your.email@example.com" and add your email
- GitHub: Already set to your username

## ❓ Quick Answers

**Where do I edit the text?**
→ All text is in `index.html`. Edit it on GitHub!

**How do I change colors?**
→ Edit `styles.css`, lines 1-15 (the `:root` section)

**How do I add my photo?**  
→ Upload photo to GitHub, then edit line 45 in `index.html`

**My changes aren't showing!**
→ Wait 2-3 minutes after committing. Then hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**How do I make my projects clickable?**
→ Enable GitHub Pages for each project repo: Settings → Pages → Select "main" branch

---

## ✨ Features

- **Professional Corporate Design**: Navy & teal color scheme
- **Responsive**: Works on desktop, tablet, and mobile
- **Image Placeholders**: Clear spots to add your photos
- **Project Showcase**: 2 active + 2 placeholder projects
- **Smooth Animations**: Fade-ins and hover effects

---

Built with ❤️ for data analytics professionals
