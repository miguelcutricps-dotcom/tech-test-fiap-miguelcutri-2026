# Teste Técnico Front-end — FIAP

Landing Page desenvolvida como teste técnico de Front-end para a FIAP, seguindo fielmente os layouts do Figma (desktop 1920×1080 e mobile 414×736).

**Deploy:** [tech-test-fiap-miguelcutri-2026.vercel.app](https://tech-test-fiap-miguelcutri-2026.vercel.app)

## Tecnologias

- **Next.js 15** (App Router + Turbopack)
- **React 19**
- **TypeScript 5**
- **SCSS Modules**
- **Google Fonts** (Figtree + Montserrat) via `next/font`

## Seções

| Seção | Descrição | Animação |
|-------|-----------|----------|
| **Navbar** | Barra fixa com logo FIAP (responsiva) e indicador de progresso de scroll | Barra de progresso preenchida conforme scroll da página |
| **Header** | Hero section com texto de fundo "SOBRE" e título "A melhor faculdade de tecnologia" | Revelação em fases sequenciais (fade-in + clip-path) |
| **Marquee** | Faixa de texto horizontal em scroll contínuo | Marquee infinito via CSS animation |
| **Intro** | Seção introdutória com imagem e texto descritivo | Fade-in ao entrar na viewport |
| **MarqueeScroll** | Texto grande que se move horizontalmente conforme o scroll do usuário | Scroll-driven horizontal via JavaScript |
| **Cursos** | Desktop: abas (Tecnologia, Inovação, Negócios) + accordion por curso. Mobile: accordion por categoria | Transição de abas, abertura/fechamento suave, fade-in ao entrar na viewport |
| **FAQ** | Accordion com interação por hover (desktop) e click (mobile) | Expansão/contração suave com transição de altura |

### Componente bônus

| Componente | Descrição |
|------------|-----------|
| **WaterEffect** | Efeito visual com partículas de água e ondas animadas via Canvas API, com grid decorativo e labels de cursos. Componente construído e disponível em `src/components/WaterEffect/`. |

## Responsividade

A página é totalmente responsiva, utilizando mixins SCSS para breakpoints consistentes:

- **Desktop:** 1920×1080, 1600×900, 1440×900, 1366×768, 1280×720, 1024×640
- **Tablet:** 1024×1366 (iPad Pro), 820×1180 (iPad Air), 768×1024 (iPad)
- **Mobile:** 414×736, 360×640, 320×568

## Navegadores Suportados

- Google Chrome
- Safari
- Firefox
- Microsoft Edge
- Opera

## Instalação

### Pré-requisitos

- Node.js 18+
- npm

### Setup

```bash
# Clonar o repositório
git clone https://github.com/miguelcutricps-dotcom/tech-test-fiap-miguelcutri-2026.git
cd tech-test-fiap-miguelcutri-2026

# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Acessar no navegador
# http://localhost:3000
```

### Build de produção

```bash
# Gerar build otimizado
npm run build

# Iniciar servidor de produção
npm start
```

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz (fontes + metadata)
│   ├── page.tsx            # Composição das seções
│   └── globals.scss        # Reset + estilos globais
├── components/
│   ├── Navbar/             # Navbar fixa + indicador de scroll
│   ├── Header/             # Hero section com animação em fases
│   ├── Marquee/            # Faixa de texto contínua
│   ├── Intro/              # Seção introdutória com imagem
│   ├── MarqueeScroll/      # Texto scroll-driven horizontal
│   ├── WaterEffect/        # Efeito de água com Canvas (bônus)
│   ├── Courses/            # Abas + accordion de cursos
│   └── FAQ/                # FAQ com hover/click
├── data/
│   ├── courses.ts          # Dados dos cursos por categoria
│   └── faq.ts              # Dados das perguntas frequentes
├── styles/
│   ├── _variables.scss     # Design tokens (cores, espaçamentos, breakpoints)
│   ├── _mixins.scss        # Mixins de responsividade
│   ├── _typography.scss    # Tipografia global
│   └── _reset.scss         # CSS Reset
public/
└── assets/
    ├── images/             # Imagens (intro-person.png)
    └── svgs/               # Logos FIAP (desktop + mobile)
```

## Dependências

| Pacote | Versão | Justificativa |
|--------|--------|---------------|
| next | 15.x | Framework React obrigatório |
| react | 19.x | Biblioteca de UI |
| react-dom | 19.x | Renderização DOM |
| sass | 1.x | Compilação de SCSS Modules |
| typescript | 5.x | Tipagem estática |

**Total de dependências de produção: 4** (next, react, react-dom, sass)

## Deploy

O projeto está hospedado na **Vercel**, com build automático via Next.js.

## Autor

Miguel Cutri — 2026
