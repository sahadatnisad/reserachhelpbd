# 🎓 Research Help BD (reserachhelpbd)

> **Global Open Access Documentation & Academic Research Hub**  
> Publish research papers, technical digests, academic writing guides, and study notes in a modern, searchable docs-style interface accessible worldwide.

---

## 🌍 Live Worldwide Link

Once published, your documentation website is accessible globally at:
🔗 **[https://sahadatnisad.github.io/reserachhelpbd/](https://sahadatnisad.github.io/reserachhelpbd/)**

---

## 🚀 Features

- 📖 **Docs-Style Interface**: Clean left sidebar navigation, table of contents, and search powered by VitePress.
- 🧮 **LaTeX Equation Support**: Native mathematical equation rendering ($E = mc^2$, TeX blocks, matrices).
- 🎨 **Dark / Light Mode**: Beautiful custom dark mode, high-contrast light mode, and responsive layout.
- ⚡ **Automated Worldwide Publishing**: GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys your site automatically every time you push to `main`.
- 📋 **Ready-to-Use Research Templates**: Academic research proposal templates, literature review guides, and BibTeX citation cheatsheets.

---

## 📂 Repository Structure

```
reserachhelpbd/
├── docs/                             # All Markdown research files
│   ├── .vitepress/                   # VitePress config, search, theme & styling
│   │   ├── config.mjs
│   │   └── theme/
│   ├── index.md                      # Landing Home Page
│   ├── getting-started/              # Introduction & contribution rules
│   ├── research-papers/              # Paper digests (AI, Data Science, Biotech)
│   ├── academic-writing/             # Writing guides, LaTeX, APA/IEEE citations
│   ├── research-tools/               # Zotero, Mendeley, arXiv & Open Data
│   └── templates/                    # Research proposals & paper summary templates
├── .github/
│   └── workflows/
│       └── deploy.yml                # Automatic GitHub Pages builder
├── package.json
└── README.md
```

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sahadatnisad/reserachhelpbd.git
   cd reserachhelpbd
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local preview server**:
   ```bash
   npm run docs:dev
   ```
   Open `http://localhost:5173/reserachhelpbd/` in your browser.

4. **Build production bundle**:
   ```bash
   npm run docs:build
   ```

---

## ⚙️ How to Activate GitHub Pages (One-Time Setup)

To enable worldwide access on GitHub:

1. Go to your repository settings on GitHub:  
   `https://github.com/sahadatnisad/reserachhelpbd/settings/pages`
2. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
3. Push your code:
   ```bash
   git add .
   git commit -m "feat: organize research documentation hub with VitePress and GitHub Pages"
   git push origin main
   ```
4. Within 1–2 minutes, your documentation site will be live worldwide at:  
   `https://sahadatnisad.github.io/reserachhelpbd/`

---

## 📄 License & Open Access
Distributed under the **MIT License**. Free and open for researchers and students globally.
