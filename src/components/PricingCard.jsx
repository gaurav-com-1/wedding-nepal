// src/components/PricingCard.jsx
import { Button } from '~/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// The props are now simpler, `isAnnual` is gone.
const PricingCard = ({ plan, delay }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay }}
      className={`flex flex-col p-8 rounded-2xl shadow-lg h-full ${plan.bgColor} ${plan.textColor} border ${plan.borderColor}`}
    >
      <h3 className="text-2xl font-semibold">{plan.title}</h3>
      <p className="mt-2 text-foreground/70">{plan.description}</p>
      
      <div className="mt-6">
        {/* The price display is now direct and simple. */}
        <span className="text-5xl font-bold">${plan.price}</span>
        {/* The "/month" or "/year" text has been removed. */}
      </div>

      <ul className="mt-8 space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckCircle2 className={`h-5 w-5 ${plan.iconColor}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto pt-8">
        <Button size="lg" className={`w-full ${plan.buttonClasses}`}>
          {plan.buttonText}
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;