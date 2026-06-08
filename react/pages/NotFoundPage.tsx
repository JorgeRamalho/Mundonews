import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="page__main">
      <div className="container not-found">
        <div className="not-found__code">404</div>
        <h1 className="not-found__title">Página não encontrada</h1>
        <p className="not-found__text">
          A página que você procura não existe ou foi movida.
        </p>
        <Link to="/" className="btn btn--primary">Voltar ao início</Link>
      </div>
    </main>
  );
}
