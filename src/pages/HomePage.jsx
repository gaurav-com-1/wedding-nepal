// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';
import { Button } from '~/components/ui/button';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';

// Import our custom components
import CursorSpotlight from '../components/CursorSpotlight';
import CinematicGallery from '../components/CinematicGallery';

// Import assets
import HeroVideo from '../assets/hero-video.mp4';
import JourneyImage from '../assets/photo6.jpg';

// --- Data for components ---
const faqItems = [
  {
    question: "What is your photography style?",
    answer: "My style is a blend of fine-art and documentary photography. I focus on capturing genuine emotions and candid moments while ensuring every shot is beautifully composed and lit, creating a timeless and elegant visual narrative."
  },
  {
    question: "Do you travel for weddings?",
    answer: "Absolutely! I love traveling for weddings and elopements. Whether it's across the state or across the globe, I'm happy to discuss travel arrangements to be there for your special day. Travel fees are customized based on the location."
  },
  {
    question: "How long until we receive our photos?",
    answer: "You will receive a sneak peek gallery of a few highlights within 48 hours of your wedding. The full, beautifully edited online gallery will be delivered within 6-8 weeks."
  },
  {
    question: "Can we print our photos?",
    answer: "Yes, of course. All my packages include high-resolution digital files without watermarks. You will receive a personal print release, allowing you to print your photos for personal use wherever you choose."
  }
];

const HomePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <CursorSpotlight />

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-screen overflow-hidden">
        <video src={HeroVideo} autoPlay loop muted playsInline className="absolute z-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight"
          >
            Your Love, <br/> Our <i className="font-light">Cinematic Lens.</i>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-white/90"
          >
            We don't just take photos. We craft a visual legacy of your most cherished day.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex justify-center gap-4"
          >
            {/* --- THIS IS THE MODIFIED BUTTON --- */}
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Begin Your Story</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <CinematicGallery />

      {/* --- FAQ Section --- */}
      <section className="py-20 sm:py-28 bg-pink-50/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-foreground/70">
              Answering some of the most common questions we receive.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full mt-12">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-semibold text-lg">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </motion.div>
  );
};

export default HomePage;