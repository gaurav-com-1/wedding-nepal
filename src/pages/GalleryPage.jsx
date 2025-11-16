// src/pages/GalleryPage.jsx
import { useState } from 'react';
// 1. The `framer-motion` import has been removed.
import Lightbox from "yet-another-react-lightbox";

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
  const [open, setOpen] = inite(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="container py-12 sm:py-20">
      {/* 2. This is now a standard <h1> element, with animation props removed. */}
      <h1 className="text-4xl font-serif font-bold text-center mb-12">
        Our Collections
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((imageSrc, i) => (
          // 3. This is now a standard <div> element, with animation props removed.
          <div
            key={i}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
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
          </div>
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

export default GalleryPage;