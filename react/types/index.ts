export type NewsCategory = 'brasil' | 'mundo' | 'opiniao' | 'artigo' | 'breaking';

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: NewsCategory;
  author: string;
  authorRole: string;
  publishedAt: string;
  imageUrl: string;
  imageAlt: string;
  isBreaking?: boolean;
  isFeatured?: boolean;
  tags: string[];
}

export interface Correspondent {
  id: string;
  name: string;
  city: string;
  country: string;
  role: string;
  initials: string;
  bio?: string;
}
