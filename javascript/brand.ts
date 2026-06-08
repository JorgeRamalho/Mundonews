/**
 * Identidade visual — Mundo News
 * Logo, slogan, emojis e metadados da marca
 */

export const BRAND = {
  name: 'Mundo News',
  nameWithEmoji: '🌎 Mundo News',
  tagline: 'A verdade em primeiro lugar',
  taglineWithEmoji: '📰 A verdade em primeiro lugar',
  slogan: 'Os fatos do Brasil e do mundo, em tempo real',
  sloganWithEmoji: '🌍 Os fatos do Brasil e do mundo, em tempo real',
  description:
    'Notícias do Brasil e do mundo em tempo real. Artigos, opinião e informação com compromisso com a verdade.',
  url: 'https://mundonews.com.br',
  locale: 'pt_BR',
  themeColor: '#c41e3a',
  email: 'redacao@mundonews.com.br',
  teamTitle: 'Nossa equipe',
  teamDescription:
    '35 anos de jornalismo sob a liderança de Mirian Ramalho, com sede em Curitiba, em busca do furo jornalístico, da verdade e da imparcialidade no Brasil e no mundo.',
} as const;

export const BRAND_EMOJI = {
  globe: '🌎',
  news: '📰',
  world: '🌍',
  brazil: '🇧🇷',
  live: '🔴',
  breaking: '🚨',
  truth: '⚖️',
  correspondent: '📡',
  opinion: '💬',
  article: '📄',
  search: '🔍',
  time: '🕐',
  calendar: '📅',
  email: '✉️',
  location: '📍',
  ethics: '🛡️',
  team: '👥',
  star: '⭐',
} as const;

export const BRAND_ASSETS = {
  favicon: '/favicon.svg',
  logo: '/logo.svg',
  logoIcon: '/logo-icon.svg',
  ogImage: '/og-image.svg',
  appleTouchIcon: '/apple-touch-icon.svg',
  manifest: '/site.webmanifest',
} as const;

export const NAV_LINKS_BRANDED = [
  { path: '/', label: 'Início', emoji: '🏠' },
  { path: '/brasil', label: 'Brasil', emoji: '🇧🇷' },
  { path: '/mundo', label: 'Mundo', emoji: '🌎' },
  { path: '/opiniao', label: 'Opinião', emoji: '💬' },
  { path: '/artigos', label: 'Artigos', emoji: '📄' },
  { path: '/sobre', label: 'Sobre', emoji: 'ℹ️' },
] as const;
