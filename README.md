# Temple Management Application

A full-stack temple management application with donation tracking, user authentication, and automated reminders.

## Project Structure

```
temple-management-app/
├── backend/           # Backend server (Node.js + Express)
│   ├── server/        # Server code
│   ├── supabase/      # Database migrations
│   ├── .env           # Backend environment variables
│   ├── package.json   # Backend dependencies
│   └── render.yaml    # Render deployment config
│
└── frontend/          # Frontend app (React + Vite)
    ├── src/           # Source code
    ├── .env           # Frontend environment variables
    ├── package.json   # Frontend dependencies
    └── vercel.json    # Vercel deployment config
```

## Deployment

- **Backend**: Deploy `backend/` folder to Render
- **Frontend**: Deploy `frontend/` folder to Vercel
- **Database**: Set up Supabase and run migrations from `backend/supabase/migrations`

See deployment guides in the artifacts for detailed instructions.

## Local Development

### Backend
```bash
cd backend
npm run dev
```

### Frontend
```bash
cd frontend
npm run dev
```
