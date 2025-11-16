// src/pages/ContactPage.jsx
import { motion } from 'framer-motion';
import BookingForm from '~/components/BookingForm';

const ContactPage = () => {
  return (
    <div className="bg-pink-50/30 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
            Begin Your Booking Journey
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            Follow the steps below to craft your initial inquiry. Upon completion, you'll receive a PDF summary for your records.
          </p>
        </div>

        {/* The Interactive Form */}
        <BookingForm />
        
      </motion.div>
    </div>
  );
};

export default ContactPage;