import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.join(__dirname, 'data')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }))
app.use(express.json())

// ---- helpers ----
const readJSON = async (file) => {
  const raw = await fs.readFile(path.join(DATA_DIR, file), 'utf-8')
  return JSON.parse(raw)
}

// ---- content routes ----
app.get('/api/portfolio', async (_req, res) => {
  try { res.json(await readJSON('portfolio.json')) }
  catch { res.status(500).json({ error: 'Could not load portfolio' }) }
})

app.get('/api/team', async (_req, res) => {
  try { res.json(await readJSON('team.json')) }
  catch { res.status(500).json({ error: 'Could not load team' }) }
})

app.get('/api/careers', async (_req, res) => {
  try { res.json(await readJSON('careers.json')) }
  catch { res.status(500).json({ error: 'Could not load careers' }) }
})

app.get('/api/blog', async (_req, res) => {
  try { res.json(await readJSON('blog.json')) }
  catch { res.status(500).json({ error: 'Could not load blog posts' }) }
})

app.get('/api/testimonials', async (_req, res) => {
  try { res.json(await readJSON('testimonials.json')) }
  catch { res.status(500).json({ error: 'Could not load testimonials' }) }
})

// ---- contact form ----
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }

  const entry = {
    name, email, phone: phone || '', service: service || 'Not specified', message,
    receivedAt: new Date().toISOString(),
  }

  try {
    // Persist enquiries to a local JSON file (swap for a database in production).
    const filePath = path.join(DATA_DIR, 'messages.json')
    let messages = []
    try { messages = JSON.parse(await fs.readFile(filePath, 'utf-8')) } catch { /* file may not exist yet */ }
    messages.push(entry)
    await fs.writeFile(filePath, JSON.stringify(messages, null, 2))

    // --- Optional: send a real email via nodemailer ---
    // 1. npm install nodemailer  (inside /server)
    // 2. fill in SMTP_* vars in server/.env
    // 3. uncomment the block below
    //
    // import nodemailer from 'nodemailer'
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT || 587),
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // })
    // await transporter.sendMail({
    //   from: process.env.SMTP_USER,
    //   to: process.env.CONTACT_TO_EMAIL,
    //   subject: `New enquiry from ${name}`,
    //   text: JSON.stringify(entry, null, 2),
    // })

    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Could not save your message. Please try again.' })
  }
})

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => {
  console.log(`Nathay Technologies API running on http://localhost:${PORT}`)
})
