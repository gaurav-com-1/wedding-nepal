// src/components/BackToTopButton.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '~/components/ui/button';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This function toggles the visibility of the button based on scroll position.
  const toggleVisibility = () => {
    // Show button if page is scrolled more than 300px
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // This function smoothly scrolls the page to the top.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // This useEffect hook adds and removes the scroll event listener.
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function to remove the listener when the component is unmounted.
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            size="icon"
            className="rounded-full h-12 w-12 shadow-lg"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;