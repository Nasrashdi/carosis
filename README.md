# كاروسيس | Carosis

منصة شاملة لبيع وشراء وتمويل وتأمين وتسجيل السيارات في سلطنة عمان.

## المتطلبات
- Node.js 18+
- قاعدة بيانات PostgreSQL (أنصح بـ Supabase أو Railway)

## خطوات التشغيل

1. **استنساخ المشروع**
   ```bash
   git clone https://github.com/your-org/carosis.git
   cd carosis
   ```

2. **نسخ ملف البيئة**
   ```bash
   cp .env.example .env
   # ضع رابط قاعدة البيانات في DATABASE_URL
   ```

3. **تثبيت الحزم**
   ```bash
   npm install
   ```

4. **تجهيز قاعدة البيانات**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **تشغيل المشروع محليًا**
   ```bash
   npm run dev
   ```

6. **النشر على Vercel**
   - اربط المشروع بـ Vercel.
   - أضف متغير البيئة DATABASE_URL.
   - سيتم النشر تلقائيًا.

---

# Carosis | Oman's Car Oasis

All-in-one platform: buy, sell, finance, insure, and register your car in Oman.

## Requirements

- Node.js 18+
- PostgreSQL DB (Supabase or Railway recommended)

## Quickstart

1. **Clone**
   ```bash
   git clone https://github.com/your-org/carosis.git
   cd carosis
   ```

2. **Copy env**
   ```bash
   cp .env.example .env
   # Set your DATABASE_URL
   ```

3. **Install deps**
   ```bash
   npm install
   ```

4. **Setup DB**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Run locally**
   ```bash
   npm run dev
   ```

6. **Deploy to Vercel**
   - Link repo to Vercel.
   - Add DATABASE_URL in settings.
   - Enjoy 🚗

---