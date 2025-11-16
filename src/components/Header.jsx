import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '~/components/ui/button';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { path: '/about', label: 'About' },
  { path: '/gallery', label: 'Collections' },
  { path: '/pricing', label: 'Pricing' },
];

const Header = ({ theme = 'light' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const textColor = theme === 'dark' ? 'text-white' : 'text-foreground';
  const navLinkColor = theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-foreground/80 hover:text-foreground';
  
  const renderDesktopNavLink = (link) => (
    <NavLink
      key={link.label}
      to={link.path}
      className={`flex items-center gap-1 text-sm font-medium ${navLinkColor} transition-colors`}
    >
      {link.label}
    </NavLink>
  );

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="relative container mx-auto h-24 flex items-center justify-between px-4 md:px-8">
        
        <NavLink to="/" className={`font-bold text-xl tracking-wider uppercase ${textColor}`}>
          Wedding Nepal
        </NavLink>

        <nav className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          {navLinks.map((link) => renderDesktopNavLink(link))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contact">Contact</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={textColor}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden absolute top-24 right-4 w-64 bg-background rounded-xl shadow-2xl border border-black/5"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-3 text-foreground font-medium rounded-md hover:bg-black/5 transition-colors text-left"
                >
                  {link.label}
                </NavLink>
              ))}
               <hr className="my-2 border-black/10" />
               <Button asChild className="w-full mt-2">
                 <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
               </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;