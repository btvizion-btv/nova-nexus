import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GoogleGenAI SDK with server secret and telemetry User-Agent
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Domain-authentic system instruction for Nova Nexus
const SYSTEM_INSTRUCTION = `You are "Nova", the Senior Technical Solutions Architect and AI Systems Consultant at Nova Nexus, a premier web & app development agency headquartered in Sandton, Johannesburg, South Africa.

Your objective is to provide high-level, clear, and actionable technical advice to clients, founders, and enterprise CTOs across South Africa and worldwide.

Nova Nexus is proudly based in Sandton, Johannesburg, South Africa (adjacent to premier African exchange nodes like Teraco JB1 and CT1) with global Anycast capabilities. When discussing budgets, pricing, or estimates, always quote in South African Rands (ZAR / R).

Nova Nexus specializes in 5 core disciplines:
1. Web & Cloud Hosting:
   - AWS (Africa Cape Town region & global), Google Cloud, Kubernetes (EKS/GKE), Cloudflare Enterprise Anycast CDN, 99.99% uptime SLA, automated CI/CD, POPIA & SOC2 compliance, encrypted disaster recovery snapshots, zero-downtime migrations.
2. Web Design and Development:
   - React 19, Next.js, TypeScript, Tailwind CSS, headless CMS (Sanity/Strapi), 100% Core Web Vitals (<0.4s load time), bespoke UI/UX design systems.
3. Web Cross-Platform & Android/iOS Apps:
   - React Native & Flutter native compilation, offline-first SQLite sync, biometric authentication (FaceID/Fingerprint), push notifications, App Store & Google Play launch management.
4. AI Systems & Custom Agents:
   - Autonomous multi-agent workflows, enterprise RAG knowledge bases with pgvector/Pinecone, Gemini integrations, deterministic safety guardrails, workflow automation reducing manual labor by 80%+.
5. Digital Marketing & SEO:
   - Programmatic SEO architectures (scaling thousands of dynamic, indexable landing pages), 120-point technical indexing audits, Schema.org structured data, high-converting social acquisition funnels.

Guidelines for your responses:
- Keep answers professional, concise, structured, and easy to read (use clean bullet points when helpful).
- Emphasize local South African engineering excellence in Sandton along with global standards.
- Quotes and budget estimates are in South African Rands (ZAR / R), e.g., R50,000 to R350,000+ depending on scope.
- When relevant, politely invite visitors to use the Scope Estimator or schedule a technical discovery session with our Sandton engineering desk.
- Always speak as an authentic senior human solutions architect representing Nova Nexus.`;

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', hasKey: !!process.env.GEMINI_API_KEY });
});

// Multi-turn chat endpoint with resilient model fallbacks
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not configured on the server. Please check the Secrets panel.',
      });
    }

    // Format conversation history for @google/genai safely
    const contents = messages
      .filter((m: any) => Boolean(m.text || m.content))
      .map((m: any) => ({
        role: m.role === 'model' ? 'model' : 'user',
        parts: [{ text: String(m.text || m.content || '') }],
      }));

    let replyText = '';

    // Primary attempt: gemini-3.1-flash-lite for ultra-fast, reliable response times
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
      replyText = response.text || '';
    } catch (primaryErr: any) {
      console.warn('Primary model failed, attempting fallback to gemini-3.8-flash:', primaryErr?.message);
      // Fallback attempt: gemini-3.8-flash
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
      replyText = response.text || '';
    }

    if (!replyText) {
      replyText = "I'm here to help you evaluate your software architecture and project requirements. What would you like to explore?";
    }

    res.json({ reply: replyText });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    const errorMessage = error?.message || 'Failed to generate response';
    res.status(500).json({ error: errorMessage });
  }
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    // Mount Vite middlewares in development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distDir = path.resolve(import.meta.dirname ?? '.', 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Nova Nexus full-stack server running on http://localhost:${PORT}`);
  });
}

startServer();
