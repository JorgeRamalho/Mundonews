import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';
import type { NewsCategory } from '../types';
import { getArticlesByCategory } from '../data/news';
import { getCategoryLabel } from '@js/utils';

interface CategoryPageProps {
  category: NewsCategory;
}

const categoryDescriptions: Record<string, string> = {
  brasil: 'Os principais fatos e acontecimentos do Brasil, com reportagens verificadas e contexto.',
  mundo: 'Notícias internacionais das principais capitais do mundo, em tempo real.',
  opiniao: 'Análises e reflexões de nossos editores e correspondentes sobre os fatos do dia.',
  artigo: 'Reportagens especiais, histórias em profundidade e conteúdo editorial exclusivo.',
};

export default function CategoryPage({ category }: CategoryPageProps) {
  const articles = getArticlesByCategory(category);
  const label = getCategoryLabel(category);

  return (
    <main className="page__main">
      <div className="container page-grid page-grid--home">
        <div>
          <header className="category-header">
            <h1 className="category-header__title">{label}</h1>
            <p className="category-header__description">
              {categoryDescriptions[category]}
            </p>
          </header>

          {articles.length > 0 ? (
            <div className="news-grid news-grid--2">
              {articles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p style={{ color: 'var(--color-text-muted)' }}>
              Nenhuma notícia encontrada nesta seção.
            </p>
          )}
        </div>

        <Sidebar />
      </div>
    </main>
  );
}
