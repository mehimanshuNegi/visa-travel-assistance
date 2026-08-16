import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import MobileBottomNav from '../components/layout/MobileBottomNav';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col relative pb-16 md:pb-0">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Floating mobile bottom navigation bar */}
      <MobileBottomNav />
    </div>
  );
}