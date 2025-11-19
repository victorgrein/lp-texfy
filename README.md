# Texfy - Landing Page

Landing page moderna e elegante para a Texfy, startup especializada em soluções de IA para otimização de PCP (Planejamento e Controle da Produção) na indústria têxtil.

## 🎨 Design Inspirado

Design minimalista e elegante inspirado nas melhores práticas de UX/UI modernas, com:

- **Tipografia Inter**: Fonte limpa e profissional similar à SF Pro Display
- **Cores Neutras**: Paleta monocromática com tons de cinza e preto
- **Espaço em Branco**: Layout arejado e focado no conteúdo
- **Bordas Arredondadas**: Cantos suaves e modernos (12px radius)
- **Glassmorphism**: Efeitos de vidro fosco na seção CTA
- **Animações Suaves**: Transições elegantes e microinterações

## 🧠 Novo Logo Minimalista

Logo de cérebro minimalista criado com design geométrico elegante:
- **Single Line Art**: Traço contínuo e fluido
- **Estilo Moderno**: Inspirado em redes neurais
- **Cores Monocromáticas**: Preto e branco para sofisticação
- **Versátil**: Funciona bem em diferentes tamanhos

## ✨ Efeitos Visuais e Animações

A landing page agora possui animações avançadas em todas as seções:

### Animações por Scroll
- **Fade In Up**: Elementos surgem de baixo para cima
- **Staggered Delays**: Animações escalonadas para fluxo natural
- **Intersection Observer**: Ativa animações apenas quando visíveis

### Elementos Interativos
- **Floating Elements**: Ícones flutuantes na seção hero
- **Hover Effects**: Cards com elevação e escala
- **Gradient Animations**: Gradientes animados sutis
- **Neural Network Background**: Padrão SVG animado

### Backgrounds Animados
- **Pulse Effects**: Elementos de fundo com pulsação suave
- **Particle Systems**: Partículas flutuantes aleatórias
- **Gradient Shifts**: Transições de gradiente contínuas
- **Mix Blend Modes**: Efeitos de mistura de cores

### Microinterações
- **Button Hover**: Botões com escala e translação
- **Icon Animations**: Ícones com pulse e bounce
- **Form Focus**: Campos com efeito glassmorphism
- **Loading States**: Spinners e feedback visual

## 🚀 Funcionalidades

- **Design Responsivo**: Totalmente adaptado para desktop, tablet e mobile
- **Formulário de Captura**: Coleta de leads qualificados para fila de espera
- **API de Envio**: Endpoint para processamento e envio de dados por e-mail
- **Animações Modernas**: Transições suaves e efeitos hover interativos
- **Validação de Formulário**: Validação client-side e server-side
- **Feedback Visual**: Estados de loading e confirmação de envio

## 🎨 Seções da Landing Page

1. **Header**: Navegação fixa com logo animado e CTA
2. **Hero**: Título principal com gradiente animado e elementos flutuantes
3. **Problema**: Cards com animações hover e background pattern
4. **Solução**: Neural network background animado
5. **Nichos**: Partículas flutuantes e ícones animados
6. **Validação**: Estrelas cintilantes e cards com hover effects
7. **CTA**: Formulário com glassmorphism e background animado
8. **Footer**: Logo com animação hover

## 🛠️ Tecnologias Utilizadas

- **Next.js 15**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização utilitária
- **shadcn/ui**: Componentes UI modernos
- **Lucide React**: Ícones vetoriais
- **Inter**: Tipografia Google Fonts
- **Custom Hooks**: Animações por scroll e intersection observer

## 🎯 Tipos de Animações Implementadas

### CSS Keyframes
- `fade-in-up`: Surgimento de baixo para cima
- `gradient`: Movimento de gradiente
- `float`: Flutuação suave
- `twinkle**: Piscada de estrelas
- `slide-in-left/right`: Entrada lateral
- `scale-in`: Zoom suave
- `rotate-slow`: Rotação lenta

### Animações por Scroll
- **Intersection Observer**: Detecta visibilidade dos elementos
- **Staggered Animation**: Animações em cascata
- **Performance Optimized**: Usa requestAnimationFrame
- **Smooth Transitions**: Transições suaves de 0.8s

### Efeitos Hover
- **Scale Effects**: Aumento de escala em cards
- **Lift Effects**: Elevação com sombra
- **Glow Effects**: Brilho sutil
- **Translate Effects**: Movimentos de translação

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts      # API endpoint para processamento do formulário
│   ├── globals.css           # Estilos globais com animações customizadas
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Landing page completa com animações
├── components/
│   └── ui/                   # Componentes shadcn/ui
├── hooks/
│   ├── use-intersection-observer.ts  # Hook para animações por scroll
│   ├── use-mobile.ts         # Hook para detecção mobile
│   └── use-toast.ts          # Hook para notificações
└── lib/
    └── utils.ts              # Utilitários
```

## 🔄 Funcionamento do Formulário

1. **Preenchimento**: Usuário preenche os dados no formulário animado
2. **Validação**: Validação client-side dos campos obrigatórios
3. **Envio**: Dados são enviados para `/api/waitlist`
4. **Processamento**: API valida e formata os dados
5. **E-mail Real**: Envia e-mail profissional para `contatovhg@hotmail.com`
6. **Confirmação**: Mensagem de sucesso com animação bounce

### 📧 Configuração de E-mail

O formulário já está configurado para enviar e-mails reais! Para ativar:

1. **Configure as credenciais Gmail** (veja `EMAIL_CONFIG.md`)
2. **Use senha de app** (obrigatório verificação em duas etapas)
3. **Teste o formulário** na landing page

### 📋 Conteúdo do E-mail

- **Design HTML Profissional**: Layout responsivo e moderno
- **Dados Completos**: Nome, e-mail, cargo, empresa e desafio
- **Informações Adicionais**: IP, User Agent, data/hora
- **Branding Texfy**: Cores e identidade visual da marca
- **Destinatário**: `contatovhg@hotmail.com`

### 🛠️ Tecnologias de E-mail

- **Nodemailer**: Biblioteca robusta para envio SMTP
- **Gmail SMTP**: Servidor de e-mail confiável
- **HTML Templates**: E-mails ricos e profissionais
- **Error Handling**: Tratamento de erros amigável
- **Debug Logs**: Logs detalhados para troubleshooting

## 🎯 Objetivo

Capturar e-mails de leads qualificados interessados na solução Texfy para PCP Têxtil, direcionando-os para a fila de espera do protótipo.

## 🚀 Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse a aplicação em `http://localhost:3000`

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:
- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+

## 🎨 Cores e Identidade Visual

- **Primária**: Preto/Preto-claro
- **Secundária**: Cinza (vários tons)
- **Neutra**: Branco e tons de cinza
- **Gradientes**: Subtis, principalmente em cinza
- **Glassmorphism**: Efeitos de transparência na seção CTA

## 📈 Características de Design

- **Minimalismo**: Layout limpo e focado
- **Espaço em Branco**: Amplo espaçamento entre elementos
- **Tipografia**: Hierarquia clara com fontes elegantes
- **Microinterações**: Hover states e transições suaves
- **Bordas Arredondadas**: Cantos suaves (12px radius)
- **Sombras Leves**: Depth sutil sem excessos

## 🎯 UX/UI Features

- **Scroll Suave**: Navegação fluida entre seções
- **Loading States**: Feedback visual durante envios
- **Form Validation**: Validação em tempo real
- **Responsive Design**: Experiência otimizada para todos dispositivos
- **Accessibility**: ARIA labels e navegação por teclado
- **Performance**: Animações otimizadas com GPU acceleration

## 🎬 Performance de Animações

- **60 FPS**: Animações otimizadas para 60 frames por segundo
- **GPU Acceleration**: Usa transform3d para aceleração de hardware
- **Reduced Motion**: Respeita preferências de movimento reduzido
- **Lazy Loading**: Animações ativadas apenas quando visíveis
- **Memory Efficient**: Cleanup de event listeners e observers

---

© 2025 Texfy - Planejamento Inteligente para PCP Têxtil