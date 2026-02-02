# AI Build Master

Plateforme de formation : page de vente (landing) + espace LMS (tableau de bord) avec Next.js 14, TypeScript, Tailwind CSS et Supabase.

## Stack

- **Frontend** : Next.js 14+ (App Router), TypeScript, Tailwind CSS
- **Backend / BDD** : Supabase (Auth, PostgreSQL, Storage, RLS)
- **Paiements** : Stripe (Checkout + Webhooks)
- **Hébergement** : Vercel

## Démarrage

### 1. Dépendances

```bash
npm install
```

### 2. Variables d'environnement

Copier `.env.example` vers `.env.local` et renseigner :

- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` / `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` / `STRIPE_PRICE_STANDARD` / `STRIPE_PRICE_PREMIUM` / `STRIPE_PRICE_PRO`
- Optionnel : `NEXT_PUBLIC_CALENDLY_EMBED_URL` pour la réservation de RDV

### 3. Supabase

1. Créer un projet sur [supabase.com](https://supabase.com).
2. Exécuter les migrations dans l’ordre (SQL Editor ou CLI) :
   - `supabase/migrations/001_schema.sql`
   - `supabase/migrations/002_rls.sql`
   - `supabase/migrations/003_triggers.sql`
   - `supabase/migrations/004_seed.sql`

### 4. Lancer le projet

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure des pages

| Page              | Route                                   | Auth   |
|-------------------|-----------------------------------------|--------|
| Landing           | `/`                                     | Non    |
| Connexion         | `/login`                                | Non    |
| Inscription       | `/register`                             | Non    |
| Réservation RDV   | `/booking`                              | Non    |
| Accueil dashboard | `/dashboard`                            | Oui    |
| Séquences         | `/dashboard/sequences`                  | Oui    |
| Suivi             | `/dashboard/suivi`                      | Oui    |
| Programme         | `/dashboard/programme`                  | Oui    |
| Évaluations       | `/dashboard/evaluations`                | Oui    |
| Documents         | `/dashboard/documents`                  | Oui    |
| À propos          | `/dashboard/about`                      | Oui    |
| Leçon             | `/dashboard/module/[id]/lesson/[id]`   | Oui    |

## APIs

- `POST /api/stripe/webhook` : webhook Stripe (checkout complété → mise à jour `profiles.plan`)
- `POST /api/booking` : création d’une réservation RDV
- `GET /api/checkout?plan=standard|premium|pro` : redirection vers Stripe Checkout (utilisateur connecté)

## Licence

Projet privé — AI Build Master.
