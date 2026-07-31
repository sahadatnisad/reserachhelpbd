# 🤝 How to Contribute Docs & Research

We welcome contributions from students, researchers, professors, and open-source enthusiasts worldwide! You can contribute research summaries, methodology guides, paper digests, or open datasets.

---

## 🛠️ Step-by-Step Contribution Workflow

### Step 1: Fork or Clone the Repository
Clone your repository locally to make edits:
```bash
git clone https://github.com/sahadatnisad/reserachhelpbd.git
cd reserachhelpbd
```

### Step 2: Install Dependencies
Ensure you have Node.js (v18+) installed, then run:
```bash
npm install
```

### Step 3: Run the Local Preview Server
Start the development server with live reload:
```bash
npm run docs:dev
```
Open `http://localhost:5173/reserachhelpbd/` in your browser to preview changes in real time.

### Step 4: Add Your Markdown File
Create a new `.md` file in the appropriate folder under `docs/`. For example:
- Adding a paper digest on AI: `docs/research-papers/ai-machine-learning/my-new-paper.md`
- Adding a writing guide: `docs/academic-writing/my-writing-guide.md`

### Step 5: Register the File in Sidebar Navigation
Open `docs/.vitepress/config.mjs` and add your file link to the `sidebar` array so it shows up in the left navigation menu!

```javascript
{ text: 'My New Paper Title', link: '/research-papers/ai-machine-learning/my-new-paper' }
```

### Step 6: Commit and Push
```bash
git add .
git commit -m "feat: add research digest on My New Paper"
git push origin main
```
The automated GitHub Actions workflow will automatically build and publish your update live worldwide! 🚀
