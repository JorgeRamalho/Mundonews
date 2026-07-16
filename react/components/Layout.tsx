import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import BreakingTicker from './BreakingTicker';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="page">
      <ScrollToTop />
      <TopBar />
      <BreakingTicker />
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
}
