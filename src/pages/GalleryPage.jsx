// src/pages/GalleryPage.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import your photos
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.jpg';
import photo7 from '../assets/polaroid1.jpg';
import photo8 from '../assets/polaroid2.jpg';

const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];
const slides = images.map(src => ({ src }));

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="container py-12 sm:py-20">
      <motion.h1 
        className="text-4xl font-serif font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Collections
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((imageSrc, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            layoutId={`gallery-image-${i}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img 
              src={imageSrc} 
              alt={`Wedding scene ${i + 1}`} 
              className="w-full h-full object-cover aspect-square transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </div>
  );
};

// Ensure this line is correct
export default GalleryPage;