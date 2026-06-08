# Mundo News

Portal de notícias do Brasil e do mundo com cobertura em tempo real, compromisso editorial com fatos verificados e interface moderna em React.

## Stack

- **React 18** + **TypeScript**
- **Vite 5** (dev server e build)
- **React Router** (navegação SPA)

## Estrutura do projeto

```
Projeto-BlogMundoNews/
├── html5/          # Ponto de entrada HTML e bridge para React
├── css3/           # Estilos globais e componentes
├── javascript/     # Marca, editorial e utilitários
├── react/          # App, páginas, componentes e dados
├── public/         # Logo, favicon e manifest
├── vite.config.ts
└── package.json
```

## Pré-requisitos

- Node.js 18+
- npm 9+

## Instalação

```bash
npm install
```

## Scripts

| Comando        | Descrição                          |
|----------------|------------------------------------|
| `npm run dev`    | Servidor de desenvolvimento        |
| `npm run build`  | Type-check + build de produção     |
| `npm run preview`| Pré-visualização do build          |
| `npm run tunnel` | Túnel Cloudflare (dev público)     |

O servidor de desenvolvimento usa a porta **5173** por padrão (`host: true` para acesso na rede local).

## Rotas

| Rota        | Conteúdo                    |
|-------------|-----------------------------|
| `/`         | Página inicial              |
| `/brasil`   | Notícias do Brasil          |
| `/mundo`    | Notícias internacionais     |
| `/sobre`    | Sobre o portal e equipe     |
| `/noticia/:id` | Artigo individual        |

## Equipe editorial

- **Mirian Ramalho** — Editora-chefe (Curitiba)
- **Lis Ramalho Barbosa** — Jornalista e colunista (Brasília)
- **Jorge Ramalho Barbosa** — Tecnologia da Informação (Curitiba)

## Licença

Projeto privado — todos os direitos reservados.
