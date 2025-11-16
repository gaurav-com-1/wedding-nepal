// src/pages/AboutPage.jsx
import { motion } from 'framer-motion';
import AboutImage from '../assets/photo1.jpg'; // Use one of your photos

const AboutPage = () => {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 pt-28 pb-20 gap-12 items-center"
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">About Wedding Nepal</h1>
          <p className="text-muted-foreground mb-4">
            Hello! I'm ___, the heart and lens behind the camera. My journey into photography began with a love for stories. I found that a single photograph could hold a novel's worth of emotion, history, and love.
          </p>
          <p className="text-muted-foreground">
            Specializing in wedding photography, I strive to create an experience that is as seamless and joyful as the images I produce. My approach is personal and unobtrusive, allowing me to capture the authentic spirit of your day.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src={AboutImage} alt="Evelyn Rose" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;