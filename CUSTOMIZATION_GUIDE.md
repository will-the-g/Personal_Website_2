# Customization Guide

This guide will help you customize your portfolio website to match your personal brand and information.

## Table of Contents
1. [Personal Information](#personal-information)
2. [Skills](#skills)
3. [Experience](#experience)
4. [Projects](#projects)
5. [Colors & Theme](#colors--theme)
6. [Social Links](#social-links)
7. [Images](#images)

---

## Personal Information

**File**: `/app/frontend/src/data/mock.js`

Update the `personalInfo` object:

```javascript
export const personalInfo = {
  name: "Your Name",                           // Change to your name
  title: "Your Professional Title",            // e.g., "Full Stack Developer"
  bio: "Your bio here...",                     // Short description about yourself
  email: "your.email@example.com",             // Your email
  location: "Your City, State",                // Your location
  social: {
    github: "https://github.com/yourusername", // Your GitHub URL
    linkedin: "https://linkedin.com/in/you",   // Your LinkedIn URL
    twitter: "https://twitter.com/you"         // Your Twitter URL
  }
};
```

---

## Skills

**File**: `/app/frontend/src/data/mock.js`

Update the `skills` array. Each skill has:
- `name`: Name of the skill
- `category`: Group it belongs to (Languages, Frontend, Backend, Cloud, DevOps, ML/AI, Database)
- `level`: Proficiency level (0-100)

Example:
```javascript
export const skills = [
  { name: "Python", category: "Languages", level: 90 },
  { name: "React", category: "Frontend", level: 85 },
  { name: "AWS", category: "Cloud", level: 80 },
  // Add more skills...
];
```

### Tips:
- Group related skills under the same category
- Be honest about proficiency levels
- Add new categories as needed
- Aim for 8-15 skills total

---

## Experience

**File**: `/app/frontend/src/data/mock.js`

Update the `experience` array. Each job should include:

```javascript
{
  id: 1,                                    // Unique ID
  company: "Company Name",
  position: "Your Position",
  period: "Start Date - End Date",          // e.g., "2022 - Present"
  location: "City, State",
  shortDescription: "Brief overview...",    // 1-2 sentences
  accomplishments: [                        // Bullet points
    "Achievement 1",
    "Achievement 2",
    "Achievement 3"
  ],
  technologies: ["Tech1", "Tech2"],         // Technologies used
  highlights: "Your key highlight..."       // Most impressive achievement
}
```

### Tips:
- Start with most recent position first
- Keep accomplishments specific and quantifiable
- Use action verbs (Built, Developed, Implemented, Led)
- Include 3-5 accomplishments per role
- Highlight measurable impacts (%, time saved, users served)

---

## Projects

**File**: `/app/frontend/src/data/mock.js`

Update the `projects` array:

```javascript
{
  id: 1,
  title: "Project Name",
  description: "What the project does...",  // 2-3 sentences
  technologies: ["React", "Python", "AWS"], // Tech stack
  category: "Category",                     // E.g., "Web Development"
  link: "https://github.com/you/project",   // GitHub or live demo
  image: "image-url"                        // Placeholder or real image
}
```

### Image URLs:
You can use:
- Placeholder images: `https://via.placeholder.com/600x400/COLOR/ffffff?text=Your+Text`
- Your own hosted images
- Screenshots from your project

Example colors for placeholders:
- Blue: `00d9ff`
- Green: `00ff88`
- Purple: `9d00ff`
- Pink: `ff00ff`

### Tips:
- Showcase 4-8 best projects
- Mix different categories
- Include both personal and professional work
- Keep descriptions concise but informative

---

## Colors & Theme

### Primary Accent Color

**File**: `/app/frontend/tailwind.config.js`

Change the cyan accent color:

```javascript
colors: {
  'neon-cyan': '#00d9ff',    // Change this hex code
  'neon-green': '#00ff88',
  'neon-pink': '#ff00ff',
}
```

### Background Colors

**File**: `/app/frontend/src/index.css`

```css
body {
  background-color: #0a0a0a;  /* Change background color */
  color: #ffffff;             /* Change text color */
}
```

### Component-Level Colors

Search and replace in component files:
- `text-cyan-400` → `text-your-color-400`
- `bg-cyan-400` → `bg-your-color-400`
- `border-cyan-400` → `border-your-color-400`
- `hover:text-cyan-400` → `hover:text-your-color-400`

### Suggested Color Palettes:

**Blue Theme** (Current):
- Primary: `#00d9ff` (cyan)
- Background: `#0a0a0a` (black)

**Green Theme**:
- Primary: `#00ff88` (mint green)
- Background: `#0a0a0a` (black)

**Purple Theme**:
- Primary: `#9d00ff` (purple)
- Background: `#0f0a1a` (dark purple-black)

**Orange Theme**:
- Primary: `#ff6b35` (orange)
- Background: `#1a0f0a` (dark brown-black)

---

## Social Links

### Adding/Removing Social Links

**File**: `/app/frontend/src/components/Footer.jsx`

Update the `socialLinks` array:

```javascript
const socialLinks = [
  { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter' },
  // Add more...
];
```

### Available Icons (from lucide-react):
- `Github`
- `Linkedin`
- `Twitter`
- `Mail`
- `Globe` (for website)
- `Instagram`
- `Facebook`
- `Youtube`

Import any additional icons:
```javascript
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
```

---

## Images

### Hero Section Image

To add a background image to the hero section:

**File**: `/app/frontend/src/pages/Home.jsx`

```jsx
<section 
  className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8"
  style={{
    backgroundImage: 'url("your-image-url")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
```

### Project Images

Replace placeholder URLs in `mock.js` with:
1. **Actual screenshots** of your projects
2. **Hosted images** (imgur, cloudinary, etc.)
3. **Custom placeholders** with your brand colors

---

## Typography

### Changing Fonts

**File**: `/app/frontend/src/index.css`

Update the font family:

```css
body {
  font-family: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

To use Google Fonts:

1. Add to `/app/frontend/public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

2. Update CSS:
```css
body {
  font-family: 'Inter', sans-serif;
}
```

---

## Logo/Brand

### Updating the Logo

**File**: `/app/frontend/src/components/Navbar.jsx`

Current logo is text-based:
```jsx
<Link to="/" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
  AC<span className="text-cyan-400">.</span>
</Link>
```

To use an image logo:
```jsx
<Link to="/">
  <img src="/logo.png" alt="Your Name" className="h-8" />
</Link>
```

---

## Final Checklist

Before deploying:

- [ ] Updated name and title
- [ ] Added your bio
- [ ] Updated email and social links
- [ ] Added your skills with accurate levels
- [ ] Added work experience
- [ ] Added projects with descriptions
- [ ] Replaced placeholder images (optional)
- [ ] Customized colors (optional)
- [ ] Tested all links
- [ ] Checked mobile responsiveness
- [ ] Reviewed all content for typos

---

## Testing Your Changes

### Development Mode:
```bash
cd frontend
yarn start
```
Changes will auto-reload.

### Docker Mode:
```bash
docker compose restart frontend
```

After making changes, always test:
1. All navigation links work
2. All external links open correctly
3. Mobile view looks good
4. Content displays properly
5. No console errors

---

## Need Help?

Refer to the main [README.md](./README.md) for deployment and technical documentation.

Happy customizing! 🚀
