# Watergate Flow Technologies

Premium Next.js catalogue and admin website for Watergate Flow Technologies, a B2B water utility technology company supplying dosing pumps, prepaid water meters, reverse osmosis systems, and water treatment plant accessories.

## Tech Stack

- Next.js App Router, TypeScript, Tailwind CSS
- Prisma ORM with Aiven PostgreSQL
- React Hook Form, Zod, Sonner
- bcryptjs authentication with protected `/admin` routes
- Lucide React icons and Plus Jakarta Sans

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.example` and set:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DBNAME?sslmode=require"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_WHATSAPP_NUMBER=""
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD_HASH=""
AUTH_SECRET="replace-with-a-long-random-secret"
```

3. Generate an admin password hash:

```bash
node -e "const bcrypt=require('bcryptjs'); bcrypt.hash('your-secure-password', 12).then(console.log)"
```

4. Generate Prisma Client:

```bash
npm run prisma:generate
```

5. Run migrations against Aiven PostgreSQL:

```bash
npm run prisma:migrate
```

6. Seed placeholder categories/products and the admin account:

```bash
npm run prisma:seed
```

7. Start development:

```bash
npm run dev
```

## Aiven PostgreSQL Notes

Use the Aiven service URI format with `sslmode=require`:

```bash
postgresql://USER:PASSWORD@HOST:PORT/defaultdb?sslmode=require
```

The CA certificate should be stored outside `public/` and never committed. For local development, place it at `prisma/certs/aiven-ca.pem` and add `sslrootcert` to `DATABASE_URL`:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/defaultdb?sslmode=require&sslrootcert=/absolute/path/to/aiven-ca.pem"
```

## Admin

Admin routes:

- `/admin/login`
- `/admin/dashboard`
- `/admin/products`
- `/admin/products/new`
- `/admin/products/[id]/edit`
- `/admin/categories`
- `/admin/enquiries`
- `/admin/settings`

Rotate the development admin password before production deployment. Keep `ADMIN_PASSWORD_HASH`, `AUTH_SECRET`, and `DATABASE_URL` only in environment variables.

## Production Deployment

For Vercel:

1. Add all environment variables in Project Settings.
2. Use the production Aiven `DATABASE_URL` with `sslmode=require`.
3. Run `npm run prisma:deploy` during deployment or from a trusted CI step.
4. Seed only if the production catalogue should start with placeholder data.
5. Set `NEXT_PUBLIC_SITE_URL` to the final domain for canonical URLs and structured data.

## Security Notes

- No online payment is implemented.
- Product prices default to `Contact for Pricing`.
- Admin credentials and database credentials are not exposed to the client.
- Server actions validate form input with Zod.
- Enquiry submission includes a basic in-memory anti-spam throttle.
- The included seed products are placeholder data and should be replaced from the admin panel.
