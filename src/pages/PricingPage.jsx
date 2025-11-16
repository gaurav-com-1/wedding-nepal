import PricingCard from '~/components/PricingCard';

const pricingPlans = [
  {
    title: 'Elopement',
    description: 'For intimate ceremonies & adventurers.',
    price: 800,
    features: ['4 hours of coverage', '1 photographer', 'Online gallery', '150 edited photos'],
    buttonText: 'Book Elopement',
    bgColor: 'bg-background',
    textColor: 'text-foreground',
    iconColor: 'text-foreground/80',
    borderColor: 'border-transparent',
    buttonClasses: 'bg-primary text-primary-foreground hover:bg-primary/90'
  },
  {
    title: 'Classic',
    description: 'Our most popular package.',
    price: 1500,
    features: ['8 hours of coverage', '2 photographers', 'Online gallery', '400 edited photos', 'Engagement session'],
    buttonText: 'Choose Classic',
    bgColor: 'bg-pink-50/50',
    textColor: 'text-foreground',
    iconColor: 'text-pink-900/80',
    borderColor: 'border-pink-200/60',
    buttonClasses: 'bg-primary text-primary-foreground hover:bg-primary/90'
  },
  {
    title: 'Luxury',
    description: 'The ultimate wedding experience.',
    price: 2500,
    features: ['Full day coverage', '2 photographers, 1 videographer', 'Heirloom album', 'All digital files', 'Drone coverage', 'Priority editing'],
    buttonText: 'Select Luxury',
    bgColor: 'bg-white',
    textColor: 'text-foreground',
    iconColor: 'text-foreground/80',
    borderColor: 'border-gray-200',
    buttonClasses: 'bg-primary text-primary-foreground hover:bg-primary/90'
  },
];

const PricingPage = () => {

  return (
    <div className="container mx-auto max-w-7xl pt-28 pb-20 sm:px-6 lg:px-8">
      {/* Header Section */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-foreground/60">
            Packages
          </p>
          <h1 className="mt-2 text-4xl font-serif font-bold sm:text-5xl">
            Pricing Plans
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Find the perfect package to tell your unique love story.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              plan={plan}
              // 4. The `isAnnual` prop is no longer passed to the card.
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    );
  };

  export default PricingPage;