# NextAuth Boilerplate

A production-ready Next.js 16 boilerplate with role-based authentication, admin panel, and modern glassmorphic UI.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss)
![Prisma](https://img.shields.io/badge/Prisma-6.19-2D3748?logo=prisma)

## Features

- 🔐 **Role-Based Authentication** - USER and ADMIN roles with protected routes
- 🌐 **Google OAuth** - One-click Google login via Better Auth
- 📧 **Email/Password Auth** - Traditional authentication support
- 🎨 **Modern UI** - Glassmorphic design with Urbanist font
- 🌙 **Dark Mode** - Built-in dark theme with next-themes
- 📱 **Responsive** - Mobile-first responsive design
- 🔒 **Protected Routes** - Proxy-based route protection
- 👑 **Admin Panel** - Full admin dashboard with user management
- 🗃️ **PostgreSQL** - Prisma ORM with PostgreSQL database
- 🏪 **Redux Toolkit** - State management ready

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.0
- **Authentication:** Better Auth
- **Database:** PostgreSQL + Prisma ORM
- **State:** Redux Toolkit
- **Forms:** React Hook Form + Zod
- **Font:** Urbanist (Google Fonts)

## Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Google OAuth credentials (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nextauth-boilerplate.git
cd nextauth-boilerplate

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file with:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/nextauth_db"

# Better Auth
BETTER_AUTH_SECRET="your-super-secret-key"
BETTER_AUTH_URL="http://localhost:3000"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Database Setup

```bash
# Push schema to database
npx prisma db push

# Generate Prisma client
npx prisma generate

# (Optional) Open Prisma Studio
npx prisma studio
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── (auth)/           # Auth pages (login, register)
│   ├── (landing)/        # Public landing page
│   ├── admin/            # Admin panel (ADMIN role only)
│   ├── app/              # User dashboard (authenticated)
│   └── api/auth/         # Better Auth API routes
├── components/
│   ├── admin/            # Admin-specific components
│   ├── dashboard/        # User dashboard components
│   ├── forms/            # Form components
│   ├── landing/          # Landing page components
│   ├── shared/           # Shared components (Navbar, Sidebar)
│   └── ui/               # UI primitives (Button, Card, Input)
├── lib/
│   ├── auth.ts           # Better Auth server config
│   ├── auth-client.ts    # Better Auth client
│   ├── db.ts             # Prisma client
│   └── validators.ts     # Zod schemas
├── store/                # Redux store
├── prisma/
│   └── schema.prisma     # Database schema
└── proxy.ts              # Route protection middleware
```

## Authentication Flow

1. **Public Routes:** `/`, `/login`, `/register`
2. **Protected Routes:** `/app/*` (requires authentication)
3. **Admin Routes:** `/admin/*` (requires ADMIN role)

### Making a User Admin

```sql
UPDATE "User" SET role = 'ADMIN' WHERE email = 'your@email.com';
```

Or use Prisma Studio:
```bash
npx prisma studio
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx prisma studio` | Open Prisma Studio |
| `npx prisma db push` | Push schema to database |

## Customization

### Adding New Protected Routes

1. Create your page in `app/app/your-page/page.tsx`
2. The route is automatically protected via `proxy.ts`

### Adding Admin Pages

1. Create your page in `app/admin/your-page/page.tsx`
2. The admin layout automatically checks for ADMIN role

### Changing Theme Colors

Edit `app/globals.css` and update the CSS variables:

```css
:root {
  --background: #030712;
  --foreground: #f9fafb;
}
```

## License

MIT License - feel free to use this boilerplate for any project.

## Support

If you find this helpful, please ⭐ star the repository!
