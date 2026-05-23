import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCTA from '@/components/common/FloatingCTA';
import ScrollToTop from '@/components/common/ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
