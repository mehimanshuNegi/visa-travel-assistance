import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import HowItWorks from '../components/sections/HowItWorks';
import VisaServices from '../components/sections/VisaServices';
import FAQ from '../components/sections/FAQ';
import AssistanceForm from '../components/sections/AssistanceForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <VisaServices />
      <FAQ />
      <AssistanceForm />
    </>
  );
}