import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '~/components/ui/button';
import { Progress } from '~/components/ui/progress';
import { DatePicker } from '~/components/ui/DatePicker';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';

const steps = [
  { id: 1, title: 'Select Your Date' },
  { id: 2, title: 'Choose Your Package' },
  { id: 3, title: 'Define Your Style' },
  { id: 4, title: 'Your Details' },
];

const packages = [
  { id: 'elopement', name: 'Elopement', price: '$800', desc: '4 hours, 1 photographer' },
  { id: 'classic', name: 'Classic', price: '$1500', desc: '8 hours, 2 photographers' },
  { id: 'luxury', name: 'Luxury', price: '$2500', desc: 'Full day, video, album' },
];

const styles = [
  { id: 'fine-art', name: 'Fine Art & Elegant', desc: 'Luminous, romantic, and beautifully composed.' },
  { id: 'documentary', name: 'Documentary & Candid', desc: 'Authentic, unposed, and focused on real moments.' },
  { id: 'classic', name: 'Classic & Timeless', desc: 'A traditional approach with a mix of posed and candid shots.' },
];

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: null,
    package: 'classic',
    style: 'fine-art',
    personalInfo: { name: '', email: '', message: '' },
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleDataChange = (field, value) => {
    if (field === 'personalInfo') {
      setFormData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, ...value } }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Final Form Data:", formData);
    const { generateInquiryPdf } = await import('~/lib/generatePdf');
    generateInquiryPdf(formData);
    nextStep();
  };

  const progress = (step - 1) * 25;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl border">
      {step < 5 && <Progress value={progress} className="mb-8" />}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Select Your Wedding Date</h2>
              <DatePicker date={formData.date} onDateChange={(date) => handleDataChange('date', date)} />
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Choose Your Package</h2>
              <RadioGroup value={formData.package} onValueChange={(val) => handleDataChange('package', val)}>
                {packages.map(pkg => (
                  <Label key={pkg.id} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-pink-50/50">
                    <RadioGroupItem value={pkg.id} id={pkg.id} />
                    <div className="ml-4">
                      <span className="font-semibold">{pkg.name} - {pkg.price}</span>
                      <p className="text-sm text-foreground/70">{pkg.desc}</p>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">What's Your Desired Style?</h2>
              <RadioGroup value={formData.style} onValueChange={(val) => handleDataChange('style', val)}>
                {styles.map(sty => (
                  <Label key={sty.id} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-pink-50/50">
                    <RadioGroupItem value={sty.id} id={sty.id} />
                    <div className="ml-4">
                      <span className="font-semibold">{sty.name}</span>
                      <p className="text-sm text-foreground/70">{sty.desc}</p>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Tell Us About You</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Full Name" value={formData.personalInfo.name} onChange={(e) => handleDataChange('personalInfo', { name: e.target.value })} required />
                <Input type="email" placeholder="Email Address" value={formData.personalInfo.email} onChange={(e) => handleDataChange('personalInfo', { email: e.target.value })} required />
                <Textarea placeholder="Any other details? (Optional)" value={formData.personalInfo.message} onChange={(e) => handleDataChange('personalInfo', { message: e.target.value })} />
                <div className="flex justify-between mt-8">
                  <Button type="button" variant="outline" onClick={prevStep}>Back</Button>
                  <Button type="submit">Submit & Download Summary</Button>
                </div>
              </form>
            </div>
          )}

          {step === 5 && (
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-green-600 mb-4">Thank You!</h2>
              <p className="text-foreground/80">Your inquiry summary PDF has been downloaded. We've received your details and will be in touch shortly. We can't wait to learn more about your story!</p>
              <Button onClick={() => setStep(1)} className="mt-8">Start a New Inquiry</Button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {step < 4 && (
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={prevStep} disabled={step === 1}>Back</Button>
          <Button onClick={nextStep}>Next</Button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;