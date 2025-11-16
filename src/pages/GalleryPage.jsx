import { useState } from 'react';
import { motion } from 'framer-motion';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';

const images = [photo1, photo2, photo3, photo4];

const slides = images.map(src => ({ src }));

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="container mx-auto max-w-7xl pt-28 pb-20 sm:px-6 lg:px-8">
      {/* Header Section */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-foreground/60">
            Gallery
          </p>
          <h1 className="mt-2 text-4xl font-serif font-bold sm:text-5xl">
            Our Collections
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            A curated selection of moments captured through our lens.
          </p>
        </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
        {images.map((imageSrc, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            layoutId={`gallery-image-${i}`} // For potential future animations
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            onClick={() => {
              setIndex(i); // Tell the lightbox which image to start with
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

      {/* 4. Render the Lightbox component */}
      {/* It's invisible until the `open` state is true */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        // Optional: Add more features like thumbnails or zoom
        // plugins={[Thumbnails, Zoom]}
      />
    </div>
  );
};

export default GalleryPage;