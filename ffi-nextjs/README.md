# Fábrica de Frases Infinitas — Next.js

Conversão fiel da landing page original (Elementor/WordPress) para **Next.js 14 (App Router)**.
Todos os **links, imagens e vídeos** permanecem exatamente os mesmos da página original.

> **Tema / cores:** paleta da marca extraída do fundo original — **verde-neon
> `#00FF52` sobre near-black** (`#040806`), tipografia **Bebas Neue + Inter**.
> Toda a coloração vive em `app/globals.css` (tokens em `:root`); o conteúdo
> (textos/links/imagens/vídeos) não mudou.

## Rodar localmente

```bash
cd ffi-nextjs
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Deploy (GitHub + Vercel)

1. Crie um repositório novo no GitHub.
2. Na pasta `ffi-nextjs/`:
   ```bash
   git init
   git add .
   git commit -m "FFI landing page (Next.js)"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```
3. Em [vercel.com](https://vercel.com) → **Add New → Project** → importe o repositório.
   O Vercel detecta Next.js automaticamente (sem configuração). Clique em **Deploy**.

> `node_modules/` e `.next/` já estão no `.gitignore` — não suba essas pastas.

## Estrutura

```
ffi-nextjs/
├─ app/
│  ├─ layout.jsx      # <html>/<body> + metadata
│  ├─ page.jsx        # monta todas as seções
│  └─ globals.css     # design tokens + estilos de todas as seções
├─ components/
│  ├─ Hero.jsx            # headline + vídeo Wistia (16:9) + CTA + preço
│  ├─ BlackBox.jsx        # "Acesse a CAIXA PRETA..."
│  ├─ WeeklyPhrases.jsx   # "NOVAS FRASES TODA SEMANA" + lista
│  ├─ ZeroToAdvanced.jsx  # "Do ZERO ao AVANÇADO" + "PRA QUEM É?"
│  ├─ StudentsVideo.jsx   # depoimento (vídeo Wistia vertical 9:16)
│  ├─ Compare.jsx         # comparativo "Sem / Com o FFI"
│  ├─ Bonuses.jsx         # 5 bônus
│  ├─ Pricing.jsx         # Combo Premium / Básico (#compra) + garantia
│  ├─ About.jsx           # "Quem é Joab Pereira"
│  ├─ Footer.jsx          # logo + CNPJ + disclaimer Kiwify
│  ├─ WistiaPlayer.jsx    # client component que carrega o player Wistia
│  ├─ Icons.jsx           # ícones SVG (check / alerta / seta)
│  └─ Rich.jsx            # helper para textos com formatação (negrito/cor)
└─ lib/
   └─ content.js          # TODO o texto da página em um único lugar
```

## Onde editar

- **Textos, preços, links de checkout** → `lib/content.js`
- **Cores / tipografia / espaçamentos** → `app/globals.css` (variáveis em `:root`)
- **Ordem das seções** → `app/page.jsx`

## Links de checkout (Kiwify)

- Combo Premium → `https://pay.kiwify.com.br/sRsV9vZ`
- Combo Básico → `https://pay.kiwify.com.br/r5fFa8d`

## Imagens

As imagens continuam sendo servidas do domínio original
(`fabricadefrasesinfinitas.com`) com tags `<img>` comuns, mantendo as URLs
idênticas. Caso queira migrar para `next/image`, os domínios já estão liberados
em `next.config.mjs`.

## Vídeos

Os dois vídeos são embeds **Wistia** originais:
- Hero: `1t4e68t2d9` (16:9)
- Depoimento: `aldixiwei3` (9:16)

## Animações & efeitos

Tudo vive em `public/effects.js` (carregado em `app/layout.jsx`) — sem
dependências externas:
- **Scroll reveal** com fade + rise (e entrada lateral nos cards de comparação)
- **Stagger** nos grids de bônus e planos
- **Parallax** do brilho âmbar do herói seguindo o cursor
- **Shimmer** no texto de destaque do título
- **Count-up** nos preços (R$197 / R$67) ao entrar na tela
- **Barra CTA fixa** que aparece ao rolar e some perto do rodapé
- **Aurora** de blobs verde-neon à deriva no fundo (sections translúcidas)
- **Barra de progresso** de leitura no topo
- **Spotlight + tilt 3D** nos cards (bônus, planos, comparativo) seguindo o cursor
- **Botões magnéticos** que reagem ao ponteiro
- **Partículas** flutuantes no herói + **glow de cursor** ambiente
- **Borda giratória** com glow no plano Premium
- Respeita `prefers-reduced-motion` (degrada para estático).

Herói totalmente centralizado (eyebrow → título → vídeo → CTA), idêntico no
desktop e no mobile, com otimização responsiva (clamp, alvos de toque ≥56px,
safe-area no iPhone).

---

> `preview.html` (na raiz do projeto) é apenas um espelho estático para
> visualização rápida — o site real é o projeto Next.js em `ffi-nextjs/`.
