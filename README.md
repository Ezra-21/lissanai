<div align="center">

# 🗣️ LissanAI

### AI-Powered English Communication Coach

*Speak with confidence. Write with clarity. Land the opportunity.*

</div>

---

## 📖 Overview

**LissanAI** is a modern web application that helps Ethiopians master professional
English communication for interviews, emails, and global career opportunities.

Many talented professionals are held back not by their skills, but by the language
barrier that stands between them and the global job market. LissanAI bridges that
gap with a friendly, AI-powered coach that is available anytime — offering
real-time feedback, structured lessons, and judgement-free practice so every
learner can communicate with confidence.

From simulating real job interviews to polishing a professional email written in
Amharic, LissanAI turns everyday practice into measurable progress.

---

## ✨ What You Can Do

| Feature | Description |
|--------|-------------|
| 🧑‍💼 **Mock Interviews** | Simulate realistic job interviews and receive instant, AI-driven feedback on your answers. |
| ✍️ **Grammar & Clarity** | Paste any text and get corrections, style suggestions, and a professional clarity score. |
| 📧 **Email Drafting** | Write rough notes in Amharic or English and let the AI craft a polished, professional email. |
| 🎤 **Pronunciation Coach** | Practice speaking and receive gentle, word-by-word guidance to sharpen your pronunciation. |
| 📚 **Learning Paths** | Follow structured lessons and quizzes covering grammar, vocabulary, and tenses. |
| 📊 **Progress Tracking** | Stay motivated with streaks, achievements, and an activity heatmap of your journey. |

---

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** (App Router) + **React 19** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com/)** for a clean, responsive, mobile-first UI
- **[Redux Toolkit](https://redux-toolkit.js.org/)** & RTK Query for state and data fetching
- **[NextAuth.js](https://next-auth.js.org/)** for secure authentication
- **[OpenAI](https://openai.com/)** for AI-powered feedback and generation
- **[Framer Motion](https://www.framer.com/motion/)** for smooth, delightful animations

---

## 🚀 Getting Started

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Ezra-21/lissanai.git
cd lissanai

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local   # then fill in your values

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run with Docker

```bash
# Build the image
docker build -t lissanai .

# Run the container (provide your env file)
docker run -p 3000:3000 --env-file .env.local lissanai
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🧪 Testing

```bash
npm run test            # Unit tests (Jest)
npm run cypress:open    # End-to-end tests (Cypress)
```

---

## 📚 Documentation

Detailed guides live in the [`docs/`](./docs) folder:

- [Architecture Overview](./docs/ARCHITECTURE.md)
- [API Reference](./docs/API.md)
- [User Guide](./docs/USER_GUIDE.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing](./docs/CONTRIBUTING.md)
