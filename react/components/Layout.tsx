import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import BreakingTicker from './BreakingTicker';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="page">
      <TopBar />
      <BreakingTicker />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
