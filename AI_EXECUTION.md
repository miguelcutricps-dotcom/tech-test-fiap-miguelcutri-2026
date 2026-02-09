# AI_EXECUTION.md — Plano de Execução do Teste Técnico Front-end FIAP

---

## 1. Objetivo do Projeto

Desenvolver uma **Landing Page** fiel à identidade visual da FIAP, seguindo rigorosamente os layouts do Figma (desktop 1920×1080 e mobile 414×736), utilizando **Next.js**, **TypeScript** e **SCSS**. A página deve ser totalmente responsiva, funcionar nos principais navegadores e conter animações por seção conforme especificado no teste técnico.

---

## 2. Hierarquia das Fontes de Verdade

A ordem de prioridade para resolver conflitos ou ambiguidades é:

| Prioridade | Fonte | Localização | Papel |
|------------|-------|-------------|-------|
| 1 (máxima) | PDF do teste técnico | `/references/teste-tecnico-fiap.pdf` | Requisitos obrigatórios, regras, seções, resoluções, tecnologias, critérios de entrega |
| 2 | Layout Figma — Desktop | Figma `node-id=2022-42` + imagens exportadas em `/references/layouts/` | Estrutura visual, espaçamentos, tipografia, cores, disposição de elementos (1920×1080) |
| 3 | Layout Figma — Mobile | Figma `node-id=3-97` + imagens exportadas em `/references/layouts/` | Adaptação mobile (414×736), comportamento responsivo, anotações de interação |
| 4 | Vídeos demonstrativos | Links YouTube no PDF | Referência para animações e comportamentos interativos |
| 5 | Assets visuais | `/public/assets/` (ícones, imagens, SVGs) | Recursos gráficos exatos a serem usados |

**Regra**: Em caso de conflito, a fonte de maior prioridade prevalece. Nunca inventar informação que não conste em nenhuma fonte.

---

## 3. Separação: Layout vs. Assets

### 3.1 Layout (referência visual — NÃO são assets de build)

Localização: `/references/layouts/`

```
/references/
├── teste-tecnico-fiap.pdf
└── layouts/
    ├── desktop/
    │   ├── full-page.png            # Landing Page completa desktop
    │   ├── navbar.png               # Navbar isolada
    │   ├── navbar-scroll.png        # Navbar com indicador de scroll
    │   ├── header.png               # Header/Hero
    │   ├── marquee-textos.png       # Faixa de texto marquee
    │   ├── intro.png                # Seção Intro com foto
    │   ├── marquee-scroll.png       # Texto por scroll
    │   ├── water-effect.png         # Transição efeito água (bônus)
    │   ├── cursos-tecnologia.png    # Cursos — aba Tecnologia
    │   ├── cursos-inovacao.png      # Cursos — aba Inovação
    │   ├── cursos-negocios.png      # Cursos — aba Negócios
    │   ├── faq.png                  # FAQ fechado
    │   └── faq-mouseover.png        # FAQ com item aberto (hover)
    └── mobile/
        └── full-page.png            # Landing Page completa mobile
```

**Regra**: Esses arquivos são apenas referência visual. NÃO devem ser importados no código. Servem exclusivamente para guiar a implementação pixel a pixel.

### 3.2 Assets (recursos usados no build)

Localização: `/public/assets/`

```
/public/
└── assets/
    ├── icons/          # Ícones (SVG/PNG)
    ├── images/         # Imagens (fotos, backgrounds)
    └── svgs/           # SVGs decorativos e logos
```

**Regra**: Somente arquivos dentro de `/public/assets/` podem ser referenciados no código. Se um asset necessário não existir nesta pasta, **pare e solicite ao desenvolvedor**. Nunca gere assets por conta própria.

---

## 4. Regras Gerais Obrigatórias

### 4.1 Fidelidade

- [ ] Todo elemento visual deve corresponder ao layout Figma
- [ ] Textos devem ser idênticos ao Figma (copiar exatamente, sem traduzir ou corrigir)
- [ ] Cores devem ser extraídas do Figma (usar variáveis SCSS)
- [ ] Espaçamentos e tamanhos devem seguir o Figma (converter para `rem` sempre que possível)
- [ ] Tipografia deve respeitar font-family, font-size, font-weight e line-height do Figma

### 4.2 Código

- [ ] **Tecnologias obrigatórias**: Next.js + TypeScript + SCSS
- [ ] **Mínimo de dependências externas** — justificar cada dependência adicionada
- [ ] Usar **medidas relativas** (`rem`, `%`, `vw`, `vh`) preferencialmente
- [ ] Cada seção deve ser um **componente isolado**
- [ ] Estilos via **SCSS Modules** (`.module.scss`)
- [ ] Variáveis de cor, tipografia e breakpoints centralizadas em arquivos SCSS globais
- [ ] Sem uso de frameworks CSS (Bootstrap, Tailwind, etc.)
- [ ] Sem uso de bibliotecas de componentes prontos (Material UI, Chakra, etc.)
- [ ] Código semântico (HTML5 semântico: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)

### 4.3 Responsividade

- [ ] **Breakpoints obrigatórios** conforme PDF:
  - Desktop: 3840×2160, 2560×1440, 2560×1080, 1920×1080, 1600×900, 1440×900, 1366×768, 1280×720, 1024×640
  - Tablet: 1024×1366, 820×1180, 768×1024 (vertical e horizontal)
  - Mobile: 414×736, 360×640, 320×568 (vertical e horizontal)
- [ ] Abordagem **desktop-first** (o layout de referência principal é 1920×1080)
- [ ] Tablet: layout intermediário a critério do desenvolvedor (conforme PDF)
- [ ] Mobile: seguir fielmente o Figma mobile (414×736)

### 4.4 Navegadores

- [ ] Compatibilidade com: Chrome, Safari, Firefox, Edge, Opera
- [ ] Testar prefixos CSS quando necessário

### 4.5 Animações

- [ ] **Cada seção deve ter pelo menos uma animação** (requisito obrigatório do PDF)
- [ ] Referência de animações nos vídeos do YouTube listados no PDF
- [ ] Animações via CSS/SCSS sempre que possível; JS somente quando necessário
- [ ] Performance: preferir `transform` e `opacity` para animações (GPU-accelerated)

### 4.6 Anti-alucinação

- [ ] **Nunca inventar textos** — copiar exatamente do Figma ou PDF
- [ ] **Nunca inventar cores** — extrair do Figma
- [ ] **Nunca inventar assets** — usar somente os fornecidos em `/public/assets/`
- [ ] **Nunca inventar seções** — implementar apenas as definidas no PDF/Figma
- [ ] **Nunca inventar animações** — usar as referências dos vídeos ou variações simples delas
- [ ] Se houver dúvida sobre qualquer elemento, **perguntar antes de implementar**

---

## 5. Stack Técnica

### 5.1 Obrigatório (definido pelo teste)

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| Next.js | latest (App Router) | Framework React com SSR/SSG |
| TypeScript | latest | Tipagem estática |
| SCSS | latest | Estilos com pré-processamento |

### 5.2 Permitido (mínimo necessário)

| Tecnologia | Justificativa |
|------------|---------------|
| `sass` | Compilação de SCSS (dependência obrigatória) |
| `framer-motion` OU CSS puro | Animações complexas (se necessário) |
| `next/font` | Carregamento otimizado de fontes |
| `next/image` | Otimização de imagens |

### 5.3 Proibido

- Frameworks CSS (Tailwind, Bootstrap, Styled Components, Emotion)
- Bibliotecas de componentes (Material UI, Chakra UI, Ant Design, Radix)
- Bibliotecas de ícones (React Icons, Lucide) — usar SVGs fornecidos
- Qualquer dependência sem justificativa clara

---

## 6. Estratégia Geral de Implementação

### 6.1 Estrutura de Pastas (Componentes)

```
/src/
├── app/
│   ├── layout.tsx              # Layout raiz com fontes e meta
│   ├── page.tsx                # Página principal (composição das seções)
│   └── globals.scss            # Reset e estilos globais
├── components/
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.module.scss
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.scss
│   ├── Marquee/
│   │   ├── Marquee.tsx
│   │   └── Marquee.module.scss
│   ├── Intro/
│   │   ├── Intro.tsx
│   │   └── Intro.module.scss
│   ├── MarqueeScroll/
│   │   ├── MarqueeScroll.tsx
│   │   └── MarqueeScroll.module.scss
│   ├── WaterEffect/              # (bônus)
│   │   ├── WaterEffect.tsx
│   │   └── WaterEffect.module.scss
│   ├── Courses/
│   │   ├── Courses.tsx
│   │   └── Courses.module.scss
│   └── FAQ/
│       ├── FAQ.tsx
│       └── FAQ.module.scss
├── styles/
│   ├── _variables.scss          # Cores, fontes, breakpoints
│   ├── _mixins.scss             # Mixins de responsividade e utilitários
│   ├── _typography.scss         # Estilos tipográficos globais
│   └── _reset.scss              # CSS Reset/Normalize
└── data/
    ├── courses.ts               # Dados dos cursos (por aba)
    └── faq.ts                   # Dados do FAQ (perguntas e respostas)
```

### 6.2 Ordem de Implementação (Seções)

A implementação segue a ordem visual da página (de cima para baixo):

1. Configuração base (fontes, variáveis, reset, layout)
2. Navbar (com indicador de scroll)
3. Header (hero section)
4. Marquee (faixa de texto horizontal)
5. Intro (seção com foto)
6. MarqueeScroll (texto animado por scroll)
7. WaterEffect (bônus — implementar por último)
8. Courses (abas + accordion)
9. FAQ (accordion com hover/click)

### 6.3 Fluxo por Seção

Para cada seção, seguir rigorosamente:

1. **Analisar** o layout Figma (desktop + mobile) + anotações
2. **Estruturar** o HTML semântico (JSX)
3. **Estilizar** desktop-first com SCSS Module
4. **Adaptar** para breakpoints intermediários (tablet)
5. **Adaptar** para mobile (414px)
6. **Animar** conforme referência dos vídeos
7. **Validar** visualmente contra o layout Figma
8. **Testar** em múltiplas resoluções

---

## 7. Seções da Landing Page — Especificação Detalhada

### 7.1 Navbar

**Descrição**: Barra de navegação fixa no topo com logo FIAP e indicador de progresso de scroll.

- **Elementos**: Logo FIAP (centralizado ou à esquerda), barra de progresso de scroll
- **Comportamento**: `position: fixed`, barra de progresso preenche conforme scroll da página
- **Animação obrigatória**: Barra de progresso de scroll (ref: YouTube no PDF)
- **Background**: Escuro/preto
- **Mobile**: Mesma animação do desktop (conforme anotação do Figma mobile)

### 7.2 Header (Hero)

**Descrição**: Seção hero com texto grande "A melhor faculdade de tecnologia" sobre fundo escuro com imagem/efeito.

- **Elementos**: Título principal, possível subtítulo, background com imagem ou efeito
- **Tipografia**: Fonte grande, bold, branca
- **Animação obrigatória**: Animação de entrada do texto (ref: YouTube no PDF)
- **Mobile**: Mesma animação do desktop

### 7.3 Marquee (Faixa de Texto)

**Descrição**: Faixa horizontal com texto em scroll contínuo.

- **Texto**: "CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO, TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO."
- **Comportamento**: Scroll horizontal infinito com CSS animation
- **Animação obrigatória**: Marquee contínuo (CSS `@keyframes`)
- **Mobile**: Mesma animação do desktop

### 7.4 Intro

**Descrição**: Seção com foto de uma pessoa estudando em ambiente escuro, com possíveis textos sobrepostos.

- **Elementos**: Imagem principal (preto e branco ou tons escuros), textos descritivos
- **Animação obrigatória**: Animação de entrada (fade-in, parallax ou reveal no scroll)

### 7.5 MarqueeScroll (Texto por Scroll)

**Descrição**: Texto grande que se move/revela conforme o usuário faz scroll.

- **Texto**: "SKILLS · CONHECIMENTO · SKILLS · MUITO ALÉM DOS TUTORIAIS ·"
- **Comportamento**: Texto se movimenta horizontalmente baseado na posição do scroll
- **Animação obrigatória**: Movimento vinculado ao scroll (scroll-driven animation)

### 7.6 WaterEffect (Bônus)

**Descrição**: Transição visual entre seções com efeito de água/splash.

- **Elementos**: Efeito visual de partículas de água, número "06" decorativo
- **Tipo**: Seção de transição puramente visual
- **Prioridade**: BAIXA — implementar apenas após todas as outras seções estarem completas
- **Animação**: Efeito de água (ref: YouTube no PDF)

### 7.7 Courses (Cursos)

**Descrição**: Seção "Cursos" com sistema de abas (Tecnologia, Inovação, Negócios) e lista accordion.

- **Elementos**:
  - Título: "Cursos"
  - Subtítulo: "Cursos de Curta Duração"
  - 3 abas: TECNOLOGIA | INOVAÇÃO | NEGÓCIOS
  - Lista de cursos dentro de cada aba (formato accordion)
  - Ícone de + que se transforma em - ao expandir (conforme anotação Figma mobile)
- **Desktop**: Tabs horizontais, lista com hover para expandir ou layout grid
- **Mobile**: Accordion vertical, ícone + / - para expandir/colapsar
- **Animação obrigatória**: Transição de abertura/fechamento do accordion e troca de aba
- **Dados**: Extrair nomes dos cursos exatamente do Figma

### 7.8 FAQ

**Descrição**: Seção "FAQ — Dúvidas Frequentes" com accordion.

- **Elementos**:
  - Título: "FAQ"
  - Subtítulo: "Dúvidas Frequentes"
  - Perguntas (accordion):
    1. QUANDO POSSO ME MATRICULAR?
    2. POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?
    3. QUAIS OS PRÉ-REQUISITOS?
    4. QUAL A DURAÇÃO DOS CURSOS?
    5. PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?
    6. VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?
- **Desktop**: Resposta aparece no hover (mouseover) — conforme label "FAQ - Textos do mouseover" no Figma
- **Mobile**: Resposta aparece no click (conforme anotação Figma mobile: "Mesma animação do Desktop, porém no ato do click")
- **Animação obrigatória**: Expansão/contração suave do conteúdo

---

## 8. Steps de Execução

> **REGRA ABSOLUTA**: É PROIBIDO avançar para o próximo step sem que TODOS os critérios de parada do step atual estejam cumpridos. Cada step é um checkpoint irreversível.

---

### STEP 0 — Validação do Ambiente e das Fontes de Verdade

**Objetivo**: Garantir que todas as fontes de verdade e assets estão presentes e acessíveis antes de qualquer código.

**O que é permitido**:
- Verificar existência de `/references/teste-tecnico-fiap.pdf`
- Verificar existência de imagens de layout em `/references/layouts/`
- Verificar existência de assets em `/public/assets/`
- Verificar que o projeto Next.js está inicializado (`package.json`, `next.config.*`, `tsconfig.json`)
- Verificar que SCSS está configurado (`sass` instalado)
- Ler e interpretar o PDF e os layouts

**O que é PROIBIDO**:
- Escrever qualquer código de componente
- Criar arquivos de estilo ou componentes
- Instalar dependências além do `sass`

**Critério de parada**:
- [ ] PDF acessível e lido
- [ ] Layouts desktop e mobile exportados e presentes em `/references/layouts/`
- [ ] Assets presentes em `/public/assets/`
- [ ] Projeto Next.js funcional (`npm run dev` / `yarn dev` compila sem erros)
- [ ] `sass` instalado como dependência
- [ ] Todas as fontes de verdade documentadas e compreendidas

---

### STEP 1 — Configuração Base (Design Tokens + Estrutura)

**Objetivo**: Criar a fundação de estilos e a estrutura de pastas de componentes, sem nenhum componente visual.

**O que é permitido**:
- Criar `/src/styles/_variables.scss` com cores, fontes e breakpoints extraídos do Figma
- Criar `/src/styles/_mixins.scss` com mixins de responsividade
- Criar `/src/styles/_typography.scss` com estilos tipográficos base
- Criar `/src/styles/_reset.scss` com reset CSS
- Configurar `/src/app/globals.scss` importando os partials
- Configurar fontes via `next/font` no `layout.tsx`
- Criar a estrutura de pastas dos componentes (pastas vazias ou com arquivos mínimos)
- Criar `/src/data/courses.ts` e `/src/data/faq.ts` com dados extraídos exatamente do Figma

**O que é PROIBIDO**:
- Implementar qualquer componente visual
- Estilizar qualquer seção específica
- Adicionar animações
- Inventar valores de cores, fontes ou espaçamentos

**Critério de parada**:
- [ ] Variáveis SCSS criadas com valores extraídos do Figma
- [ ] Mixins de breakpoint para todas as resoluções obrigatórias
- [ ] Reset CSS aplicado
- [ ] Fontes carregadas via `next/font`
- [ ] Estrutura de pastas completa
- [ ] Dados de cursos e FAQ preenchidos exatamente como no Figma
- [ ] `npm run dev` / `yarn dev` compila sem erros

---

### STEP 2 — Navbar

**Objetivo**: Implementar a Navbar fixa com indicador de progresso de scroll, responsiva e com animação.

**O que é permitido**:
- Criar `Navbar.tsx` e `Navbar.module.scss`
- Implementar logo FIAP usando asset de `/public/assets/`
- Implementar barra de progresso de scroll (JavaScript + CSS)
- Tornar responsivo para todos os breakpoints
- Adicionar animação do indicador de scroll

**O que é PROIBIDO**:
- Modificar componentes de outros steps
- Implementar seções que não sejam a Navbar
- Usar bibliotecas externas para o scroll indicator

**Critério de parada**:
- [ ] Navbar visualmente idêntica ao Figma (desktop e mobile)
- [ ] Barra de progresso funcional em todos os breakpoints
- [ ] `position: fixed` com `z-index` adequado
- [ ] Animação presente e funcional
- [ ] Sem erros de lint ou compilação

---

### STEP 3 — Header (Hero)

**Objetivo**: Implementar a seção hero com título principal e fundo visual.

**O que é permitido**:
- Criar `Header.tsx` e `Header.module.scss`
- Implementar o título "A melhor faculdade de tecnologia"
- Implementar background com imagem/efeito conforme Figma
- Tornar responsivo para todos os breakpoints
- Adicionar animação de entrada

**O que é PROIBIDO**:
- Modificar a Navbar (já concluída)
- Implementar seções subsequentes
- Inventar textos ou imagens não presentes no Figma/assets

**Critério de parada**:
- [ ] Header visualmente idêntico ao Figma (desktop e mobile)
- [ ] Texto exato conforme Figma
- [ ] Background conforme Figma
- [ ] Responsivo em todos os breakpoints
- [ ] Animação de entrada presente
- [ ] Sem erros de lint ou compilação

---

### STEP 4 — Marquee (Faixa de Texto)

**Objetivo**: Implementar a faixa de texto com scroll horizontal contínuo.

**O que é permitido**:
- Criar `Marquee.tsx` e `Marquee.module.scss`
- Implementar animação de scroll horizontal infinito com CSS puro
- Texto exato do Figma
- Tornar responsivo

**O que é PROIBIDO**:
- Modificar seções anteriores
- Usar bibliotecas de marquee/carousel
- Alterar texto

**Critério de parada**:
- [ ] Texto idêntico ao Figma
- [ ] Animação de scroll horizontal contínuo e fluido
- [ ] Sem "saltos" ou gaps na animação
- [ ] Responsivo em todos os breakpoints
- [ ] Sem erros de lint ou compilação

---

### STEP 5 — Intro

**Objetivo**: Implementar a seção Intro com foto e textos.

**O que é permitido**:
- Criar `Intro.tsx` e `Intro.module.scss`
- Usar imagem de `/public/assets/`
- Usar `next/image` para otimização
- Implementar layout conforme Figma
- Adicionar animação de entrada (scroll reveal, fade-in, etc.)

**O que é PROIBIDO**:
- Modificar seções anteriores
- Inventar imagens ou textos
- Usar imagem que não esteja em `/public/assets/`

**Critério de parada**:
- [ ] Seção visualmente idêntica ao Figma (desktop e mobile)
- [ ] Imagem correta e otimizada
- [ ] Animação de entrada presente
- [ ] Responsivo em todos os breakpoints
- [ ] Sem erros de lint ou compilação

---

### STEP 6 — MarqueeScroll (Texto por Scroll)

**Objetivo**: Implementar o texto que se move horizontalmente baseado na posição do scroll.

**O que é permitido**:
- Criar `MarqueeScroll.tsx` e `MarqueeScroll.module.scss`
- Implementar scroll-driven animation (CSS ou JS mínimo)
- Texto exato do Figma

**O que é PROIBIDO**:
- Modificar seções anteriores
- Usar bibliotecas pesadas para animação de scroll

**Critério de parada**:
- [ ] Texto idêntico ao Figma
- [ ] Movimento horizontal vinculado ao scroll do usuário
- [ ] Performance suave (sem jank)
- [ ] Responsivo em todos os breakpoints
- [ ] Sem erros de lint ou compilação

---

### STEP 7 — Courses (Cursos)

**Objetivo**: Implementar a seção de cursos com sistema de abas e accordion.

**O que é permitido**:
- Criar `Courses.tsx` e `Courses.module.scss`
- Implementar 3 abas (Tecnologia, Inovação, Negócios)
- Implementar accordion para lista de cursos
- Ícone de + / - para indicar estado aberto/fechado
- Animação de transição entre abas e abertura/fechamento
- Usar dados de `/src/data/courses.ts`

**O que é PROIBIDO**:
- Modificar seções anteriores
- Usar bibliotecas de tabs/accordion
- Inventar nomes de cursos

**Critério de parada**:
- [ ] Seção visualmente idêntica ao Figma (desktop e mobile)
- [ ] 3 abas funcionais com conteúdo correto
- [ ] Accordion funcional com animação suave
- [ ] Ícone + / - alternando corretamente
- [ ] Nomes dos cursos idênticos ao Figma
- [ ] Responsivo em todos os breakpoints
- [ ] Sem erros de lint ou compilação

---

### STEP 8 — FAQ

**Objetivo**: Implementar a seção FAQ com accordion (hover no desktop, click no mobile).

**O que é permitido**:
- Criar `FAQ.tsx` e `FAQ.module.scss`
- Implementar accordion com comportamento dual:
  - Desktop: abre no hover (mouseover)
  - Mobile: abre no click
- Usar dados de `/src/data/faq.ts`
- Animação de expansão/contração

**O que é PROIBIDO**:
- Modificar seções anteriores
- Inventar perguntas ou respostas
- Usar bibliotecas de accordion

**Critério de parada**:
- [ ] Seção visualmente idêntica ao Figma (desktop e mobile)
- [ ] 6 perguntas corretas conforme Figma
- [ ] Respostas exatas conforme Figma
- [ ] Hover funcional no desktop
- [ ] Click funcional no mobile
- [ ] Animação suave de abertura/fechamento
- [ ] Responsivo em todos os breakpoints
- [ ] Sem erros de lint ou compilação

---

### STEP 9 — WaterEffect (Bônus)

**Objetivo**: Implementar a seção de transição com efeito visual de água.

**O que é permitido**:
- Criar `WaterEffect.tsx` e `WaterEffect.module.scss`
- Implementar efeito visual de água/splash entre seções
- Usar Canvas, WebGL, CSS ou SVG para o efeito
- Número decorativo "06" conforme Figma

**O que é PROIBIDO**:
- Modificar seções anteriores que já funcionam
- Usar bibliotecas pesadas que comprometam a performance
- Implementar antes de TODAS as outras seções estarem completas

**Critério de parada**:
- [ ] Efeito visual de água presente e funcional
- [ ] Transição coerente entre as seções adjacentes
- [ ] Performance aceitável (sem degradar o restante da página)
- [ ] Responsivo
- [ ] Sem erros de lint ou compilação

---

### STEP 10 — Validação Final e Polish

**Objetivo**: Validação completa da página em todas as resoluções e navegadores.

**O que é permitido**:
- Testar em TODAS as resoluções listadas no PDF
- Corrigir bugs visuais e de responsividade
- Ajustar animações (timing, easing)
- Otimizar performance (Lighthouse)
- Ajustar acessibilidade básica (`alt` em imagens, `aria-labels`)
- Escrever/atualizar `README.md` com instruções de instalação

**O que é PROIBIDO**:
- Adicionar novas seções ou funcionalidades
- Refatorar a arquitetura
- Mudar a stack tecnológica

**Critério de parada**:
- [ ] Página funcional e fiel ao Figma em TODAS as resoluções obrigatórias:
  - [ ] 3840×2160
  - [ ] 2560×1440
  - [ ] 2560×1080
  - [ ] 1920×1080
  - [ ] 1600×900
  - [ ] 1440×900
  - [ ] 1366×768
  - [ ] 1280×720
  - [ ] 1024×640
  - [ ] 1024×1366 (iPad Pro — vertical e horizontal)
  - [ ] 820×1180 (iPad Air — vertical e horizontal)
  - [ ] 768×1024 (iPad — vertical e horizontal)
  - [ ] 414×736 (iPhone 8 Plus — vertical e horizontal)
  - [ ] 360×640 (Galaxy S5 — vertical e horizontal)
  - [ ] 320×568 (iPhone 5/SE — vertical e horizontal)
- [ ] Funcional nos navegadores: Chrome, Safari, Firefox, Edge, Opera
- [ ] Cada seção possui pelo menos uma animação
- [ ] Sem erros no console
- [ ] Sem erros de lint ou compilação
- [ ] `README.md` completo com instruções de instalação e dependências
- [ ] Projeto pronto para deploy e entrega

---

## 9. Regras de Controle de Qualidade por Step

| Regra | Descrição |
|-------|-----------|
| **Bloqueio de avanço** | É PROIBIDO iniciar o Step N+1 sem que TODOS os critérios do Step N estejam ✅ |
| **Comparação visual** | Ao finalizar cada step, comparar o resultado com a imagem de referência correspondente em `/references/layouts/` |
| **Sem regressão** | Ao implementar um step novo, o step anterior não pode quebrar. Se quebrar, corrigir antes de avançar |
| **Sem improviso** | Se não encontrar informação sobre um detalhe visual, buscar nas fontes de verdade na ordem de prioridade. Se não encontrar em nenhuma, perguntar |
| **Commit por step** | Cada step concluído deve gerar um commit atômico com mensagem descritiva (ex: `feat: implement Navbar with scroll progress indicator`) |
| **Revisão de textos** | Antes de dar qualquer step como concluído, verificar que TODOS os textos são idênticos ao Figma |

---

## 10. Referências de Animação (YouTube)

| Seção | URL | Descrição |
|-------|-----|-----------|
| Landing Page completa | https://www.youtube.com/watch?v=SrZDsx6TKf0 | Demonstração geral da página |
| Navbar | https://www.youtube.com/watch?v=c8iQTLkq0-w | Indicador de progresso de scroll |
| Header | https://www.youtube.com/watch?v=7HQy9yHkkiY | Animação de entrada do header |
| Intro | https://www.youtube.com/watch?v=Mq-ccKBZQbE | Animação da seção intro |
| Água (bônus) | https://www.youtube.com/watch?v=cppCTudutGI | Efeito visual de água |
| Cursos | https://www.youtube.com/watch?v=uD_dps55oCw | Animação da seção cursos |
| FAQ | https://www.youtube.com/watch?v=fPt8MyWDeNE | Animação do FAQ |

---

## 11. Breakpoints SCSS (Referência Rápida)

```scss
// _variables.scss — Breakpoints (desktop-first)
$breakpoints: (
  // Desktop
  'uhd':        3840px,
  'qhd':        2560px,
  'fhd':        1920px,
  'wxga-plus':  1600px,
  'wxga':       1440px,
  'hdp':        1366px,
  'hd':         1280px,
  'xga':        1024px,

  // Tablet
  'ipad-pro':   1024px,
  'ipad-air':   820px,
  'ipad':       768px,

  // Mobile
  'mobile-lg':  414px,
  'mobile-md':  360px,
  'mobile-sm':  320px,
);
```

---

## 12. Checklist Final de Entrega

- [ ] Todas as seções implementadas conforme Figma
- [ ] Responsividade em todas as resoluções obrigatórias
- [ ] Animações em todas as seções
- [ ] Compatibilidade cross-browser
- [ ] `README.md` com instruções de instalação
- [ ] Código limpo, sem console.log ou TODO perdidos
- [ ] Dependências mínimas e justificadas
- [ ] Projeto no GitHub (repositório público)
- [ ] HTML semântico
- [ ] Performance aceitável (Lighthouse > 80)

---

*Este documento é a fonte de verdade para a execução do projeto. Toda decisão de implementação deve ser referenciada neste plano. Em caso de dúvida, consultar as fontes na ordem de prioridade definida na Seção 2.*
