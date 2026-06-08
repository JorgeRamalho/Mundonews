import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';
import EditorialBlock from '../components/EditorialBlock';
import { HOME_EDITORIAL_BLOCKS } from '@js/editorial';
import Correspondents from '../components/Correspondents';
import TruthBanner from '../components/TruthBanner';
import {
  getFeaturedArticle,
  getLatestArticles,
} from '../data/news';
import { BRAND, BRAND_EMOJI } from '@js/brand';

export default function HomePage() {
  const featured = getFeaturedArticle();
  const latest = getLatestArticles(7).filter((a) => !a.isFeatured).slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="container hero__content">
          <p className="hero__eyebrow">{BRAND_EMOJI.news} Jornalismo independente</p>
          <h1 className="hero__title">
            {BRAND.sloganWithEmoji}
          </h1>
          <p className="hero__subtitle">
            {BRAND_EMOJI.article} Artigos, {BRAND_EMOJI.opinion} opinião e informação com compromisso com a verdade.
            {BRAND_EMOJI.team} {BRAND.teamTitle} atuando em busca da verdade no Brasil e pelo mundo.
          </p>
          <div className="hero__cta">
            <Link to="/sobre" className="btn btn--primary">
              {BRAND_EMOJI.star} Conheça nossa missão
            </Link>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-value">{BRAND_EMOJI.globe} 2</div>
              <div className="hero__stat-label">Cobertura em Capitais</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">{BRAND_EMOJI.live} 24/7</div>
              <div className="hero__stat-label">Cobertura em Tempo Real</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">{BRAND_EMOJI.truth} 100%</div>
              <div className="hero__stat-label">Compromisso em Fatos Verificados</div>
            </div>
          </div>
        </div>
      </section>

      <main className="page__main">
        <div className="container page-grid page-grid--home">
          <div>
            {featured && (
              <section style={{ marginBottom: '2.5rem' }}>
                <h2 className="section-title">{BRAND_EMOJI.star} Destaque</h2>
                <NewsCard article={featured} featured />
              </section>
            )}

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 className="section-title">{BRAND_EMOJI.news} Últimas notícias</h2>
              <div className="news-grid news-grid--2">
                {latest.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            <section className="editorial-section">
              <div className="editorial-grid">
                {HOME_EDITORIAL_BLOCKS.map((block) => (
                  <EditorialBlock key={block.id} block={block} variant="home" />
                ))}
              </div>
            </section>
          </div>

          <Sidebar />
        </div>

        <TruthBanner />

        <div className="container">
          <Correspondents />
        </div>
      </main>
    </>
  );
}
