import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Featured1 from '../assets/polaroid1.jpg';
import Featured2 from '../assets/polaroid2.jpg';
import Featured3 from '../assets/polaroid3.jpg';
import Featured4 from '../assets/photo4.jpg';
import Featured5 from '../assets/photo5.jpg';

const images = [Featured1, Featured2, Featured3, Featured4, Featured5];

const CinematicGallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          <div className="flex items-center pl-24">
             <div className="w-96 text-left">
                <h2 className="font-serif text-5xl font-bold">A Visual Diary</h2>
                <p className="mt-4 text-foreground/70">
                  Each frame, a chapter. Each gallery, a complete story. Scroll to explore the narratives we've crafted.
                </p>
             </div>
          </div>
          {images.map((img, index) => (
            <div key={index} className="w-[40vw] h-[60vh] overflow-hidden rounded-xl shadow-lg">
              <img src={img} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover"/>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicGallery;