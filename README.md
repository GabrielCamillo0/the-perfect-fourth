# The Perfect Fourth

Landing page estática em Next.js App Router para vender o guia digital **The Perfect Fourth**. O conteúdo público está em inglês americano; este README e comentários técnicos ficam em português.

## Stack

- Next.js App Router, React e TypeScript
- Tailwind CSS 4 via `@tailwindcss/postcss`
- `next/font`, `next/image` e `lucide-react`
- Checkout Lemon Squeezy via Lemon.js
- Pronto para Vercel

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Scripts

```bash
npm run lint
npm run typecheck
npm run build
npm run verify:ui
```

Para `verify:ui`, deixe um servidor Next rodando e, se quiser validar o checkout com URL falsa:

```powershell
$env:NEXT_PUBLIC_LEMON_GUIDE_CHECKOUT_URL="https://example.com/guide-checkout"
$env:NEXT_PUBLIC_LEMON_BUNDLE_CHECKOUT_URL="https://example.com/bundle-checkout"
npm run dev
```

Em outro terminal:

```powershell
$env:PLAYWRIGHT_BASE_URL="http://localhost:3000"
npm run verify:ui
```

O script gera screenshots em `tmp/playwright`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha quando necessário:

```env
NEXT_PUBLIC_SITE_URL=https://theperfectfourth.com
NEXT_PUBLIC_LEMON_STORE_URL=https://libertyandspark.lemonsqueezy.com
NEXT_PUBLIC_LEMON_GUIDE_CHECKOUT_URL=https://libertyandspark.lemonsqueezy.com/checkout/buy/f073475e-638b-4e7e-b010-9798254b7292
NEXT_PUBLIC_LEMON_BUNDLE_CHECKOUT_URL=https://libertyandspark.lemonsqueezy.com/checkout/buy/4c43aec9-663d-4544-b0be-688f5300fcd5
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_CONTACT_EMAIL=hello@theperfectfourth.com
```

Os botões de checkout usam `LemonSqueezy.Url.Open()` quando o Lemon.js está disponível. Os links reais da loja Liberty & Spark ja ficam como fallback em `lib/constants.ts`; as variáveis acima servem para sobrescrever os URLs em deploy sem mexer no código.

## Conteúdo centralizado

Produto, marca, preços, links, FAQs, imagens, CTAs e textos legais ficam em `lib/constants.ts`. Evite duplicar preço ou URL em componentes.

## Analytics e UTMs

O site preserva `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `fbclid` e `gclid` na sessão e anexa esses parâmetros ao checkout. GA e Meta Pixel só carregam quando as variáveis públicas existem.

Eventos preparados:

- `page_view`
- `checkout_click`
- `gallery_open`
- `faq_open`
- `scroll_milestone`

## Assets

As 12 imagens finais estão em `public/images` como WebP. Elas foram geradas sem texto crítico embutido para evitar artefatos; textos importantes são HTML acessível.

## Contato

A página `/contact` usa um formulário estático que abre `mailto:` com `NEXT_PUBLIC_CONTACT_EMAIL`. Para produção com recebimento direto no site, integre Formspree, Basin, Resend ou outro serviço de formulário/API.

## Deploy Vercel

1. Conecte o repositório na Vercel.
2. Configure as variáveis de ambiente públicas.
3. Use o preset Next.js padrão.
4. Rode o build.

O arquivo `vercel.json` mantém a configuração mínima para Next.js.
