import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="brasil" element={<CategoryPage category="brasil" />} />
        <Route path="mundo" element={<CategoryPage category="mundo" />} />
        <Route path="opiniao" element={<CategoryPage category="opiniao" />} />
        <Route path="artigos" element={<CategoryPage category="artigo" />} />
        <Route path="noticia/:slug" element={<ArticlePage />} />
        <Route path="sobre" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
