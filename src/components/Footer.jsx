// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { Button } from '~/components/ui/button';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-primary-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-background text-foreground p-8 sm:p-12 rounded-2xl shadow-xl text-center border border-white/10"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Let's Create Something Beautiful
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/70">
            Ready to tell your story? I'd be honored to be a part of your special day. 
            Reach out to discuss your vision.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full text-base">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </motion.div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-16 pb-8 text-center md:text-left">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold tracking-widest uppercase">Wedding Nepal</h3>
            <p className="mt-2 text-sm text-primary-foreground/60">
              Capturing moments, creating memories.
            </p>
          </div>
          
          {/* Link Columns */}
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-primary-foreground/80">Navigate</h4>
            <ul className="mt-4 space-y-3">
              <li><Link to="/" className="text-primary-foreground/60 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/60 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/gallery" className="text-primary-foreground/60 hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-primary-foreground/80">Services</h4>
            <ul className="mt-4 space-y-3">
              <li><Link to="/pricing" className="text-primary-foreground/60 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-primary-foreground/80">Connect</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="mailto:hello@wedding.nepal.photo" className="text-primary-foreground/60 hover:text-white transition-colors">wedding.nepal.photo</a></li>
              <li className="flex justify-center md:justify-start gap-4 pt-2">
                <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors"><Twitter size={20} /></a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-primary-foreground/10" />

        {/* Copyright */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Wedding Nepal. All Rights Reserved.</p>
          </div>        
      </div>  
    </footer>
  );
};

export default Footer;