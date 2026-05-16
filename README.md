# 💕 Laura Wrapped

Site estilo Instagram Stories / Spotify Wrapped feito para a Laura.

## Estrutura de Pastas (MVC)

```
laura-wrapped/
├── public/
│   └── images/          ← fotos (img1.jpg … img7.jpg)
├── src/
│   ├── models/
│   │   └── slideModel.js      ← dados de cada slide
│   ├── views/
│   │   ├── IntroView.jsx      ← tela de entrada
│   │   ├── StoryView.jsx      ← container dos stories
│   │   ├── SlideView.jsx      ← slide de foto individual
│   │   ├── ProgressBar.jsx    ← barras de progresso
│   │   ├── HeartsLayer.jsx    ← corações flutuantes
│   │   └── ProposalView.jsx   ← tela final (pedido)
│   ├── controllers/
│   │   ├── slideController.js ← lógica de navegação (hook)
│   │   └── musicController.js ← Web Audio API
│   ├── styles/
│   │   ├── global.css
│   │   ├── intro.css
│   │   ├── slide.css
│   │   └── proposal.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev

# 3. Gerar build de produção
npm run build

# 4. Visualizar o build localmente
npm run preview
```

## Como subir para ela acessar

### Opção 1 — Netlify Drop (mais fácil, gratuito)
1. Rode `npm run build`
2. Acesse https://app.netlify.com/drop
3. Arraste a pasta `dist/` para lá
4. Pronto! Você recebe um link como `https://abc123.netlify.app`

### Opção 2 — Vercel CLI
```bash
npm install -g vercel
npm run build
vercel dist/
```

### Opção 3 — GitHub Pages
1. Faça push no GitHub
2. Ative GitHub Pages apontando para a branch `main` + pasta `/dist`

## Personalizar frases
Edite o arquivo `src/models/slideModel.js` e mude os campos:
- `phrase` — frase principal
- `sub` — frase secundária (itálico)
- `label` — número/categoria do slide
