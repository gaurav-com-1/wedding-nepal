import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { AnimatePresence, motion } from 'framer-motion';
import BackToTopButton from './BackToTopButton';

const Layout = () => {
  const location = useLocation();
  // 1. Check if the current page is the homepage
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {/* 2. Pass a 'theme' prop to the Header based on the page */}
      <Header theme={isHomePage ? 'dark' : 'light'} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      
      {/* 2. Add the button component here */}
      <BackToTopButton />
    </div>
  );
};

export default Layout;