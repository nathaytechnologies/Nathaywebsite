# Nathay Technologies — Website

A full-stack marketing website for **Nathay Technologies** (IT services + the Nathay Payroll product), built with:

- **Frontend:** React 18 + Vite + React Router
- **Backend:** Node.js + Express (serves content APIs and handles the contact form)

Design: light theme, soft teal → blue gradient accent, glassmorphic pill navigation and floating badge cards — inspired by the reference design you shared, adapted for an IT/software brand. Fully mobile responsive (the left pill nav collapses into a top bar + full-screen menu on smaller screens).

## Project structure

```
nathay-technologies/
├── client/          React + Vite frontend
│   └── src/
│       ├── components/   Navbar, Footer
│       └── pages/         Home, Services, Products, Portfolio, About, Team, Blog, Contact
└── server/          Express backend + JSON data + contact form handler
    └── data/         portfolio.json, team.json, careers.json, blog.json, testimonials.json
```

## Getting started

You'll need **Node.js 18+** installed. This project wasn't built with internet access in this sandbox, so run `npm install` yourself the first time — everything else is ready to go.

### 1. Backend

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

The API runs at `http://localhost:5000`. It exposes:

- `GET /api/portfolio`, `/api/team`, `/api/careers`, `/api/blog`, `/api/testimonials`
- `POST /api/contact` — saves enquiries to `server/data/messages.json` (swap in a database or the commented-out `nodemailer` block in `server/index.js` for production)

### 2. Frontend

In a second terminal:

```bash
cd client
npm install
npm run dev
```

Open `http://localhost:5173`. In dev, Vite proxies `/api/*` requests to the backend (see `client/vite.config.js`), so the two run together seamlessly.

### 3. Production build

```bash
cd client
npm run build
```

This outputs static files to `client/dist`, which you can serve with any static host (Vercel, Netlify, Nginx) or have the Express server serve directly by adding:

```js
app.use(express.static('../client/dist'))
```

to `server/index.js`.

## Customizing

- **Colors / fonts:** all design tokens live at the top of `client/src/index.css` (`:root` block) — change one variable to restyle the whole site.
- **Content:** portfolio, team, careers, blog posts and testimonials are all editable in the JSON files under `server/data/` — the frontend fetches them live, with hardcoded fallbacks so pages never look empty if the API is down.
- **Nav links / pages:** edit the `LINKS` array in `client/src/components/Navbar.jsx`.
- **Payroll product page:** `client/src/pages/Products.jsx`.

## Notes

- The contact form currently stores messages in a local JSON file. For production, connect a real database and/or uncomment the `nodemailer` block in `server/index.js` to send email notifications.
- Replace the placeholder phone number, address and social handles in `Footer.jsx` and `Contact.jsx` with your real details.
