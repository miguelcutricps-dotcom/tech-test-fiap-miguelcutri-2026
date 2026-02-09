# Teste Técnico Front-end — FIAP

Landing Page desenvolvida como teste técnico de Front-end para a FIAP, seguindo os layouts do Figma (desktop 1920×1080 e mobile 414×736).

## Tecnologias

- **Next.js 15** (App Router + Turbopack)
- **TypeScript**
- **SCSS** (Modules)
- **React 19**

## Seções

| Seção | Descrição | Animação |
|-------|-----------|----------|
| **Navbar** | Barra fixa com logo FIAP e indicador de progresso de scroll | Barra de progresso preenchida conforme scroll |
| **Header** | Hero section com título "A melhor faculdade de tecnologia" | Fade-in + slide-up do texto |
| **Marquee** | Faixa de texto horizontal em scroll contínuo | Marquee infinito via CSS |
| **Intro** | Seção introdutória com imagem | Fade-in ao entrar na viewport |
| **MarqueeScroll** | Texto grande que se move com o scroll do usuário | Scroll-driven horizontal |
| **WaterEffect** | Transição com efeito de partículas de água (bônus) | Partículas animadas via Canvas |
| **Cursos** | Abas (Tecnologia, Inovação, Negócios) + accordion | Transição de abas e abertura/fechamento |
| **FAQ** | Accordion com hover (desktop) / click (mobile) | Expansão/contração suave |

## Responsividade

A página é responsiva e foi testada nas seguintes resoluções:

**Desktop:** 3840×2160, 2560×1440, 2560×1080, 1920×1080, 1600×900, 1440×900, 1366×768, 1280×720, 1024×640

**Tablet:** 1024×1366 (iPad Pro), 820×1180 (iPad Air), 768×1024 (iPad) — vertical e horizontal

**Mobile:** 414×736 (iPhone 8 Plus), 360×640 (Galaxy S5), 320×568 (iPhone 5/SE) — vertical e horizontal

## Navegadores Suportados

- Google Chrome
- Safari
- Firefox
- Edge
- Opera

## Instalação

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Setup

```bash
# Clonar o repositório
git clone <url-do-repositorio>
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
│   ├── layout.tsx          # Layout raiz (fontes + meta)
│   ├── page.tsx            # Composição das seções
│   └── globals.scss        # Reset + estilos globais
├── components/
│   ├── Navbar/             # Navbar fixa + indicador de scroll
│   ├── Header/             # Hero section
│   ├── Marquee/            # Faixa de texto contínua
│   ├── Intro/              # Seção introdutória
│   ├── MarqueeScroll/      # Texto por scroll
│   ├── WaterEffect/        # Efeito de água (bônus)
│   ├── Courses/            # Abas + accordion de cursos
│   └── FAQ/                # FAQ com hover/click
├── styles/
│   ├── _variables.scss     # Design tokens
│   ├── _mixins.scss        # Mixins de responsividade
│   ├── _typography.scss    # Tipografia global
│   └── _reset.scss         # CSS Reset
├── data/
│   ├── courses.ts          # Dados dos cursos
│   └── faq.ts              # Dados do FAQ
public/
└── assets/
    ├── icons/              # Ícones
    ├── images/             # Imagens
    └── svgs/               # SVGs e logos
```

## Dependências

| Pacote | Versão | Justificativa |
|--------|--------|---------------|
| next | 15.x | Framework obrigatório |
| react | 19.x | Biblioteca de UI (par do Next.js) |
| react-dom | 19.x | Renderização DOM (par do React) |
| sass | 1.x | Compilação de SCSS (obrigatório) |
| typescript | 5.x | Tipagem estática (obrigatório) |

**Total de dependências de produção: 4** (next, react, react-dom, sass)

## Autor

Miguel Cutri — 2026
